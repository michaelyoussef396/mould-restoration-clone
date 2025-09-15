#!/usr/bin/env python3

import os
import re
import glob

def suburb_to_url_slug(suburb_name):
    """Convert suburb name to URL slug format"""
    # Remove file extension
    suburb = suburb_name.replace('.tsx', '')

    # Handle special cases with camel case
    camel_case_map = {
        'EastMelbourne': 'east-melbourne',
        'WestMelbourne': 'west-melbourne',
        'NorthMelbourne': 'north-melbourne',
        'SouthMelbourne': 'south-melbourne',
        'SouthYarra': 'south-yarra',
        'StKilda': 'st-kilda',
        'PortMelbourne': 'port-melbourne',
        'MelbourneCBD': 'melbourne-cbd',
        'BrightonEast': 'brighton-east',
        'MalvernEast': 'malvern-east',
        'MountWaverley': 'mount-waverley',
        'GlenWaverley': 'glen-waverley',
        'GlenIris': 'glen-iris',
        'BoxHill': 'box-hill',
        'MillPark': 'mill-park',
        'ManorLakes': 'manor-lakes',
        'PointCook': 'point-cook',
        'HoppersCrossing': 'hoppers-crossing',
        'WheelersHill': 'wheelers-hill',
        'WheelersHillSE': 'wheelers-hill-se',
        'NottingHill': 'notting-hill',
        'ForestHill': 'forest-hill',
        'AscotVale': 'ascot-vale',
        'MooneePonds': 'moonee-ponds',
        'NoblePark': 'noble-park',
        'AlbertPark': 'albert-park',
        'MiddlePark': 'middle-park',
        'WilliamsLanding': 'williams-landing',
        'WyndhamVale': 'wyndham-vale'
    }

    if suburb in camel_case_map:
        return camel_case_map[suburb]

    # Default: convert CamelCase to kebab-case
    # Add space before uppercase letters
    slug = re.sub('([a-z])([A-Z])', r'\1-\2', suburb)
    return slug.lower()

def generate_suburb_title_description(suburb_name):
    """Generate SEO title and description for suburb"""
    suburb_display = suburb_name.replace('.tsx', '').replace('_', ' ')
    # Convert CamelCase to proper spacing
    suburb_display = re.sub('([a-z])([A-Z])', r'\1 \2', suburb_display)

    # Melbourne CBD special case
    if 'Melbourne CBD' in suburb_display:
        suburb_display = 'Melbourne CBD'

    title = f"Mould Removal {suburb_display} Melbourne - Professional Same-Day Service"
    description = f"Professional mould removal {suburb_display} Melbourne. IICRC certified technicians, same-day service available, comprehensive restoration. Expert local service. Call 1800 954 117."

    return title, description

# Directory path
locations_dir = "/Users/michaelyoussef/APP/mould-restoration-clone/src/pages/locations/"

# Get all location files without canonical URLs
location_files = []
for file_path in glob.glob(os.path.join(locations_dir, "*.tsx")):
    with open(file_path, 'r') as f:
        content = f.read()
        if 'canonical' not in content:
            location_files.append(os.path.basename(file_path))

print(f"Found {len(location_files)} location files without canonical URLs")

for filename in location_files:
    file_path = os.path.join(locations_dir, filename)
    suburb_slug = suburb_to_url_slug(filename)
    title, description = generate_suburb_title_description(filename)
    canonical_url = f"https://mouldrestoration.com.au/services/mould-removal-{suburb_slug}"

    print(f"Processing {filename} -> {suburb_slug}...")

    with open(file_path, 'r') as file:
        content = file.read()

    # Look for LocationPageSEO usage pattern
    location_seo_pattern = r'(<LocationPageSEO\s+[^>]*?)(\s*\/?>)'

    if re.search(location_seo_pattern, content):
        # Check if canonical is already present
        if 'canonical=' not in content:
            # Add canonical parameter
            def add_canonical(match):
                existing_params = match.group(1)
                closing = match.group(2)
                return f'{existing_params}\n        canonical="{canonical_url}"{closing}'

            content = re.sub(location_seo_pattern, add_canonical, content)
            print(f"  Added canonical URL to existing LocationPageSEO in {filename}")
        else:
            print(f"  {filename} already has canonical parameter, skipping...")
            continue
    else:
        # Look for where to insert LocationPageSEO component
        # Find the return statement and add after it
        return_pattern = r'(\s+return \(\s+<div[^>]*>\s*)(.*?Professional Service Bar)'

        location_seo_component = f'''      {{/* SEO Optimization for {filename.replace('.tsx', '')} */}}
      <LocationPageSEO
        suburb="{filename.replace('.tsx', '').replace('_', ' ')}"
        service="removal"
        title="{title}"
        description="{description}"
        canonical="{canonical_url}"
      />

      {{/* '''

        if re.search(return_pattern, content, re.DOTALL):
            content = re.sub(
                return_pattern,
                rf'\1{location_seo_component}\2',
                content,
                flags=re.DOTALL
            )
            print(f"  Added LocationPageSEO component to {filename}")

            # Check if import exists
            if 'LocationPageSEO' not in content:
                # Add import - look for existing SEO imports or other imports
                if 'from \'@/components/seo/SEOHead\'' in content:
                    content = re.sub(
                        r'(import \{[^}]*)\} from \'@/components/seo/SEOHead\'',
                        r'\1, LocationPageSEO} from \'@/components/seo/SEOHead\'',
                        content
                    )
                else:
                    # Add new import after Navigation import
                    nav_import = "import { Navigation } from '@/components/Navigation';"
                    if nav_import in content:
                        content = content.replace(
                            nav_import,
                            f"{nav_import}\nimport {{ LocationPageSEO }} from '@/components/seo/SEOHead';"
                        )
                print(f"  Added LocationPageSEO import to {filename}")
        else:
            print(f"  Could not find suitable insertion point in {filename}")
            continue

    # Write the updated content back to file
    with open(file_path, 'w') as file:
        file.write(content)

    print(f"  Successfully updated {filename}")

print(f"Batch location canonical URL update completed! Updated {len(location_files)} files.")
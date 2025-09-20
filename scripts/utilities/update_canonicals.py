#!/usr/bin/env python3

import os
import re

# Define the service pages that need canonical URLs
service_pages = {
    "AdvancedFoggingSanitisation.tsx": {
        "service": "fogging",
        "title": "Advanced Fogging Sanitisation Melbourne - ULV Professional Treatment",
        "description": "Advanced ULV fogging sanitisation Melbourne. Penetrates hard-to-reach spaces, comprehensive treatment, professional equipment. Expert Melbourne service. Call 1800 954 117.",
        "canonical": "https://mouldrestoration.com.au/services/advanced-fogging-sanitisation"
    },
    "CompleteMaterialRemoval.tsx": {
        "service": "removal",
        "title": "Complete Material Removal Melbourne - Total Mould Elimination",
        "description": "Complete material removal Melbourne. Total mould elimination, structural restoration, comprehensive replacement. Professional Melbourne service. Call 1800 954 117.",
        "canonical": "https://mouldrestoration.com.au/services/complete-material-removal"
    },
    "CaseStudies.tsx": {
        "service": "",
        "title": "Mould Removal Case Studies Melbourne - Real Results & Testimonials",
        "description": "Melbourne mould removal case studies. Real before/after results, customer testimonials, successful restoration projects. 100+ properties restored. Professional service.",
        "canonical": "https://mouldrestoration.com.au/case-studies"
    },
    "ContactOptimized.tsx": {
        "service": "",
        "title": "Contact Mould & Restoration Co Melbourne - Professional Service",
        "description": "Contact Melbourne's trusted mould restoration experts. Professional service 7am-7pm every day. Call 1800 954 117 for immediate assistance.",
        "canonical": "https://mouldrestoration.com.au/contact"
    }
}

# Directory path
pages_dir = "/Users/michaelyoussef/APP/mould-restoration-clone/src/pages/"

for filename, config in service_pages.items():
    file_path = os.path.join(pages_dir, filename)

    if not os.path.exists(file_path):
        print(f"File {filename} not found, skipping...")
        continue

    print(f"Processing {filename}...")

    with open(file_path, 'r') as file:
        content = file.read()

    # Check if file already has SEOHead import
    if 'ServicePageSEO' in content or 'SEOHead' in content:
        print(f"  {filename} already has SEO components, checking canonical...")
        if 'canonicalUrl=' in content:
            print(f"  {filename} already has canonical URL, skipping...")
            continue

    # Add SEOHead import if not present
    if 'ServicePageSEO' not in content and 'SEOHead' not in content:
        # Find the import statements section and add SEOHead import
        import_pattern = r'(import.*from \'@/components/ContactSection\';\n)'
        if re.search(import_pattern, content):
            content = re.sub(
                import_pattern,
                r'\1import { ServicePageSEO } from \'@/components/seo/SEOHead\';\n',
                content
            )
            print(f"  Added ServicePageSEO import to {filename}")
        else:
            # Try alternative pattern
            contact_import = "import { ContactSection } from '@/components/ContactSection';"
            if contact_import in content:
                content = content.replace(
                    contact_import,
                    f"{contact_import}\nimport {{ ServicePageSEO }} from '@/components/seo/SEOHead';"
                )
                print(f"  Added ServicePageSEO import to {filename} (alternative method)")

    # Add SEO component after return statement
    return_pattern = r'(\s+return \(\s+<div[^>]*>\s*)(.*?Professional Service Bar)'
    seo_component = f'''      {{/* SEO Optimization for {filename.replace('.tsx', '')} */}}
      <ServicePageSEO
        service="{config['service']}"
        title="{config['title']}"
        description="{config['description']}"
        canonicalUrl="{config['canonical']}"
      />

      {{/* '''

    if re.search(return_pattern, content, re.DOTALL):
        content = re.sub(
            return_pattern,
            rf'\1{seo_component}\2',
            content,
            flags=re.DOTALL
        )
        print(f"  Added SEO component to {filename}")

    # Write the updated content back to file
    with open(file_path, 'w') as file:
        file.write(content)

    print(f"  Successfully updated {filename}")

print("Batch canonical URL update completed!")
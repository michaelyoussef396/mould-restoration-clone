#!/usr/bin/env python3
import re

# List of all 145 location files with priority classifications
locations_with_priority = {
    # Inner Melbourne Premium Suburbs (0.95 priority)
    "MelbourneCBD": 0.95,
    "Carlton": 0.95,
    "Fitzroy": 0.95,
    "Richmond": 0.95,
    "SouthYarra": 0.95,
    "Prahran": 0.95,

    # Premium Eastern Suburbs (0.9 priority)
    "Toorak": 0.9,
    "Malvern": 0.9,
    "MalvernEast": 0.9,
    "Armadale": 0.9,
    "Hawthorn": 0.9,
    "Kew": 0.9,
    "Camberwell": 0.9,
    "GlenWaverley": 0.9,
    "Balwyn": 0.9,
    "Kooyong": 0.9,

    # Bayside Premium Suburbs (0.9 priority)
    "Brighton": 0.9,
    "BrightonEast": 0.9,
    "Sandringham": 0.9,
    "Hampton": 0.9,
    "StKilda": 0.9,
    "Elsternwick": 0.85,
    "Elwood": 0.85,
    "Ripponlea": 0.85,

    # CBD Adjacent Areas (0.85 priority)
    "Southbank": 0.85,
    "Docklands": 0.85,
    "EastMelbourne": 0.85,
    "WestMelbourne": 0.85,
    "NorthMelbourne": 0.85,
    "SouthMelbourne": 0.85,
    "PortMelbourne": 0.85,
    "AlbertPark": 0.85,
    "MiddlePark": 0.85,
    "Parkville": 0.85,
    "SouthWharf": 0.85,

    # Inner Creative Corridor (0.85 priority)
    "Collingwood": 0.85,
    "Abbotsford": 0.85,
    "Cremorne": 0.85,
    "Windsor": 0.85,
    "Alphington": 0.85,
    "PrincesHill": 0.85,
    "CliftonHill": 0.85,
    "Burnley": 0.85,

    # Northern Suburbs (0.8 priority)
    "Brunswick": 0.8,
    "Coburg": 0.8,
    "Preston": 0.8,
    "Thornbury": 0.8,
    "Northcote": 0.8,
    "Fairfield": 0.8,
    "Ivanhoe": 0.8,
    "Heidelberg": 0.8,
    "Bundoora": 0.8,
    "MillPark": 0.8,
    "Reservoir": 0.8,
    "Thomastown": 0.8,
    "Epping": 0.8,
    "Lalor": 0.8,
    "Broadmeadows": 0.8,

    # Eastern Suburbs (0.8 priority)
    "BoxHill": 0.8,
    "Blackburn": 0.8,
    "BlackburnNorth": 0.8,
    "BlackburnSouth": 0.8,
    "ForestHill": 0.8,
    "Burwood": 0.8,
    "MountWaverley": 0.8,
    "WheelersHill": 0.8,
    "WheelersHillSE": 0.8,
    "GlenIris": 0.8,
    "Ashwood": 0.8,
    "Chadstone": 0.8,
    "Oakleigh": 0.8,
    "Clayton": 0.8,
    "Mulgrave": 0.8,
    "Carnegie": 0.8,
    "Caulfield": 0.8,
    "CaulfieldEast": 0.8,
    "CaulfieldNorth": 0.8,
    "CaulfieldSouth": 0.8,
    "Ringwood": 0.8,
    "Mitcham": 0.8,
    "Vermont": 0.8,
    "Nunawading": 0.8,
    "Croydon": 0.8,
    "Lilydale": 0.8,
    "Doncaster": 0.8,
    "Bulleen": 0.8,
    "Templestowe": 0.8,
    "Bentleigh": 0.8,
    "MontAlbert": 0.8,

    # Western Suburbs (0.75 priority)
    "Footscray": 0.75,
    "Williamstown": 0.75,
    "Altona": 0.75,
    "Newport": 0.75,
    "Yarraville": 0.75,
    "Seddon": 0.75,
    "Spotswood": 0.75,
    "Maribyrnong": 0.75,
    "Essendon": 0.75,
    "MooneePonds": 0.75,
    "AscotVale": 0.75,
    "Flemington": 0.75,
    "Kensington": 0.75,
    "Sunshine": 0.75,
    "Laverton": 0.75,
    "PointCook": 0.75,
    "Werribee": 0.75,
    "HoppersCrossing": 0.75,
    "Tarneit": 0.75,
    "Truganina": 0.75,
    "WyndhamVale": 0.75,
    "ManorLakes": 0.75,
    "WilliamsLanding": 0.75,
    "Braybrook": 0.75,
    "DeerPark": 0.75,
    "Tottenham": 0.75,

    # Southeastern Suburbs (0.75 priority)
    "Dandenong": 0.75,
    "NoblePark": 0.75,
    "Springvale": 0.75,
    "Keysborough": 0.75,
    "NarreWarren": 0.75,
    "Berwick": 0.75,
    "Cranbourne": 0.75,

    # Coastal & Bayside Extended (0.75 priority)
    "Mentone": 0.75,
    "Parkdale": 0.75,
    "Mordialloc": 0.75,
    "Aspendale": 0.75,
    "Edithvale": 0.75,
    "Bonbeach": 0.75,
    "Carrum": 0.75,
    "McKinnon": 0.75,
    "Ormond": 0.75,
    "Balaclava": 0.75,
    "Murrumbeena": 0.75,
    "Hughesdale": 0.75,
    "Huntingdale": 0.75,
    "NottingHill": 0.75,
    "Highett": 0.75,
    "Cheltenham": 0.75,
    "Frankston": 0.75,
    "FrankstonSouth": 0.75,
    "StKildaEast": 0.75,
    "Canterbury": 0.75,
    "Chatham": 0.75,
    "SurreyHills": 0.75,
    "Parkmore": 0.75
}

def camel_to_kebab(name):
    """Convert CamelCase to kebab-case"""
    # Special cases
    special_cases = {
        "MelbourneCBD": "melbourne-cbd",
        "StKilda": "st-kilda",
        "StKildaEast": "st-kilda-east",
        "WheelersHillSE": "wheelers-hill-se",
        "McKinnon": "mckinnon"  # Fixed: McKinnon should be mckinnon, not mc-kinnon
    }

    if name in special_cases:
        return special_cases[name]

    # Regular conversion: insert hyphen before uppercase letters (except first)
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1-\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1-\2', s1).lower()

def generate_sitemap():
    """Generate the complete sitemap XML"""

    # Group locations by priority
    priority_groups = {
        0.95: [],
        0.9: [],
        0.85: [],
        0.8: [],
        0.75: []
    }

    for location, priority in locations_with_priority.items():
        kebab_name = camel_to_kebab(location)
        priority_groups[priority].append(kebab_name)

    # Sort each group alphabetically
    for priority in priority_groups:
        priority_groups[priority].sort()

    # Generate XML
    xml_content = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Melbourne Mould Removal Location Pages - Complete Technical SEO Coverage -->
  <!-- Generated: 2025-09-17 | Total Pages: 145 | Standardised URL Structure | Strategic Internal Linking -->
  <!-- NEW STRUCTURE: /locations/[suburb] with optimised canonical URLs -->

'''

    # Add entries by priority groups
    priority_labels = {
        0.95: "Inner Melbourne Premium Suburbs (0.95 priority)",
        0.9: "Premium Eastern & Bayside Suburbs (0.9 priority)",
        0.85: "CBD Adjacent & Inner Creative Areas (0.85 priority)",
        0.8: "Northern & Eastern Suburbs (0.8 priority)",
        0.75: "Western, Southeastern & Extended Bayside (0.75 priority)"
    }

    for priority in sorted(priority_groups.keys(), reverse=True):
        if priority_groups[priority]:
            xml_content += f"  <!-- {priority_labels[priority]} -->\n"
            for location in priority_groups[priority]:
                xml_content += f'''  <url>
    <loc>https://mouldrestoration.com.au/locations/{location}</loc>
    <lastmod>2025-09-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>
'''
            xml_content += "\n"

    xml_content += "</urlset>\n"

    return xml_content

# Generate and save the sitemap
sitemap_content = generate_sitemap()

with open("/Users/michaelyoussef/APP/mould-restoration-clone/public/sitemap-locations.xml", "w") as f:
    f.write(sitemap_content)

print("✅ Updated sitemap-locations.xml with all 145 location pages")
print(f"✅ Total entries: {len(locations_with_priority)}")

# Verify count
total_count = sitemap_content.count('<loc>')
print(f"✅ Verified XML entries: {total_count}")

# Show the missing locations that were added
current_sitemap = [
    "abbotsford", "albert-park", "alphington", "altona", "armadale", "ascot-vale",
    "ashwood", "aspendale", "balaclava", "balwyn", "bentleigh", "blackburn",
    "bonbeach", "box-hill", "brighton", "brighton-east", "broadmeadows", "brunswick",
    "bulleen", "bundoora", "burwood", "camberwell", "carlton", "carnegie", "carrum",
    "caulfield", "chadstone", "clayton", "clifton-hill", "coburg", "collingwood",
    "cremorne", "croydon", "dandenong", "docklands", "doncaster", "east-melbourne",
    "edithvale", "elsternwick", "elwood", "epping", "essendon", "fairfield", "fitzroy",
    "flemington", "footscray", "forest-hill", "glen-iris", "glen-waverley", "hampton",
    "hawthorn", "heidelberg", "hoppers-crossing", "hughesdale", "huntingdale", "ivanhoe",
    "kensington", "kew", "kooyong", "lalor", "laverton", "lilydale", "malvern",
    "malvern-east", "manor-lakes", "maribyrnong", "mckinnon", "melbourne-cbd", "mentone",
    "middle-park", "mill-park", "mitcham", "moonee-ponds", "mordialloc", "mount-waverley",
    "mulgrave", "murrumbeena", "newport", "noble-park", "north-melbourne", "northcote",
    "notting-hill", "nunawading", "oakleigh", "ormond", "parkdale", "parkville",
    "point-cook", "port-melbourne", "prahran", "preston", "princes-hill", "reservoir",
    "richmond", "ringwood", "sandringham", "seddon", "south-melbourne", "south-yarra",
    "southbank", "spotswood", "springvale", "st-kilda", "sunshine", "tarneit",
    "templestowe", "thomastown", "thornbury", "toorak", "truganina", "vermont",
    "werribee", "west-melbourne", "wheelers-hill", "williams-landing", "williamstown",
    "windsor", "wyndham-vale", "yarraville"
]

all_new_locations = [camel_to_kebab(loc) for loc in locations_with_priority.keys()]
missing_locations = set(all_new_locations) - set(current_sitemap)

print(f"\n🆕 Added {len(missing_locations)} missing locations:")
for loc in sorted(missing_locations):
    print(f"   • {loc}")
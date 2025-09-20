#!/usr/bin/env python3
import re

# List of all 145 location files (CamelCase)
all_locations = [
    "Abbotsford", "AlbertPark", "Alphington", "Altona", "Armadale", "AscotVale",
    "Ashwood", "Aspendale", "Balaclava", "Balwyn", "Bentleigh", "Berwick",
    "Blackburn", "BlackburnNorth", "BlackburnSouth", "Bonbeach", "BoxHill",
    "Braybrook", "Brighton", "BrightonEast", "Broadmeadows", "Brunswick",
    "Bulleen", "Bundoora", "Burnley", "Burwood", "Camberwell", "Canterbury",
    "Carlton", "Carnegie", "Carrum", "Caulfield", "CaulfieldEast", "CaulfieldNorth",
    "CaulfieldSouth", "Chadstone", "Chatham", "Cheltenham", "Clayton", "CliftonHill",
    "Coburg", "Collingwood", "Cranbourne", "Cremorne", "Croydon", "Dandenong",
    "DeerPark", "Docklands", "Doncaster", "EastMelbourne", "Edithvale", "Elsternwick",
    "Elwood", "Epping", "Essendon", "Fairfield", "Fitzroy", "Flemington", "Footscray",
    "ForestHill", "Frankston", "FrankstonSouth", "GlenIris", "GlenWaverley", "Hampton",
    "Hawthorn", "Heidelberg", "Highett", "HoppersCrossing", "Hughesdale", "Huntingdale",
    "Ivanhoe", "Kensington", "Kew", "Keysborough", "Kooyong", "Lalor", "Laverton",
    "Lilydale", "Malvern", "MalvernEast", "ManorLakes", "Maribyrnong", "McKinnon",
    "MelbourneCBD", "Mentone", "MiddlePark", "MillPark", "Mitcham", "MontAlbert",
    "MooneePonds", "Mordialloc", "MountWaverley", "Mulgrave", "Murrumbeena",
    "NarreWarren", "Newport", "NoblePark", "Northcote", "NorthMelbourne", "NottingHill",
    "Nunawading", "Oakleigh", "Ormond", "Parkdale", "Parkmore", "Parkville",
    "PointCook", "PortMelbourne", "Prahran", "Preston", "PrincesHill", "Reservoir",
    "Richmond", "Ringwood", "Ripponlea", "Sandringham", "Seddon", "Southbank",
    "SouthMelbourne", "SouthWharf", "SouthYarra", "Spotswood", "Springvale",
    "StKilda", "StKildaEast", "Sunshine", "SurreyHills", "Tarneit", "Templestowe",
    "Thomastown", "Thornbury", "Toorak", "Tottenham", "Truganina", "Vermont",
    "Werribee", "WestMelbourne", "WheelersHill", "WheelersHillSE", "WilliamsLanding",
    "Williamstown", "Windsor", "WyndhamVale", "Yarraville"
]

# Current sitemap locations (kebab-case)
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

def camel_to_kebab(name):
    """Convert CamelCase to kebab-case"""
    # Special cases
    special_cases = {
        "MelbourneCBD": "melbourne-cbd",
        "StKilda": "st-kilda",
        "StKildaEast": "st-kilda-east",
        "WheelersHillSE": "wheelers-hill-se"
    }

    if name in special_cases:
        return special_cases[name]

    # Regular conversion: insert hyphen before uppercase letters (except first)
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1-\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1-\2', s1).lower()

# Convert all locations to kebab-case
all_kebab = [camel_to_kebab(loc) for loc in all_locations]

# Find missing locations
missing = set(all_kebab) - set(current_sitemap)

print(f"Total locations: {len(all_locations)}")
print(f"Current sitemap entries: {len(current_sitemap)}")
print(f"Missing locations ({len(missing)}):")
for loc in sorted(missing):
    print(f"  {loc}")

# Print all kebab-case locations for reference
print("\nAll 145 locations in kebab-case:")
for i, loc in enumerate(sorted(all_kebab)):
    print(f"{i+1:3d}. {loc}")
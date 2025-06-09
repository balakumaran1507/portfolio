import pyfiglet

fonts_to_test = [
    "5lineoblique",
    "alligator",
    "alligator2",
    "banner3",
    "big",
    "bell",
    "bigchief",
    "binary",
    "block",
    "caligraphy",
    "chunky",
    "colossal",
    "doh",
    "doom",
    "epic",
    "invita",
    "gothic"
]

text = "Balakumaran"

for font in fonts_to_test:
    print(f"\n=== Font: {font} ===\n")
    try:
        ascii_art = pyfiglet.figlet_format(text, font=font)
        print(ascii_art)
    except Exception as e:
        print(f"Error rendering font '{font}': {e}")

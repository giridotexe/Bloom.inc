from PIL import Image, ImageDraw
import os

assets_dir = r"c:\Users\Bell\Desktop\Bloom.inc\public\assets"

def make_transparent_floodfill(in_path, out_path):
    # Open as RGBA
    img = Image.open(in_path).convert("RGBA")
    
    # We will floodfill from the 4 corners. 
    # Pillow's floodfill modifies the image in place.
    # We need a unique color that is not in the image to fill with first
    # Or directly fill with transparent (0,0,0,0)
    
    width, height = img.size
    corners = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    # We can use a threshold. The backgrounds are off-white, so they should be similar to the corner pixels.
    # Pillow ImageDraw.floodfill takes a 'thresh' argument.
    
    for corner in corners:
        ImageDraw.floodfill(img, corner, (255, 255, 255, 0), thresh=45)
    
    # Save the image
    img.save(out_path, "PNG")

for filename in os.listdir(assets_dir):
    if filename.endswith("-top.jpg"):
        in_path = os.path.join(assets_dir, filename)
        out_name = filename.replace(".jpg", ".png")
        out_path = os.path.join(assets_dir, out_name)
        make_transparent_floodfill(in_path, out_path)
        print(f"Processed {filename} -> {out_name} with floodfill")

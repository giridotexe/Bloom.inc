import os
from rembg import remove
from PIL import Image

assets_dir = r"c:\Users\Bell\Desktop\Bloom.inc\public\assets"

for filename in os.listdir(assets_dir):
    if filename.endswith("-top.jpg"):
        in_path = os.path.join(assets_dir, filename)
        out_name = filename.replace(".jpg", ".png")
        out_path = os.path.join(assets_dir, out_name)
        
        try:
            print(f"Processing {filename}...")
            input_img = Image.open(in_path)
            output_img = remove(input_img)
            output_img.save(out_path, "PNG")
            print(f"Successfully saved {out_name}")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

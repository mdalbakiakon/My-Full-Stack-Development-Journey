
#! Project [Mod 3]
#* 📌Objective: 
# Build a Python script that:
# Reads a .txt file containing user data
# Extracts the url and output filename (2 lines first line url , second line filename)
# Generates a QR code using that data
# Saves the QR code image using the specified filename




#------------------Code Block----------------#

import qrcode as qr

def generate_qr(filepath):
    with open(filepath, "r") as file:
        lines = file.readlines()

    url = lines[0].strip()
    imgName = lines[1].strip()
    
    generated_qr = qr.make(url)
    generated_qr.save(imgName)

generate_qr("info.txt")        
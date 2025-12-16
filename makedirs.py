import os

folder_path = 'D:\\Working on Programme\\Full-Stack-Development-Journey'
new_folder_path = os.path.join(folder_path, 'Day 65 (MongoDB CRUD Operations)')

os.makedirs(new_folder_path, exist_ok=True)
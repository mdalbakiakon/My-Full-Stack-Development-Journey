import os

folder_path = 'D:\\Working on Programme\\Full-Stack-Development-Journey'
new_folder_path = os.path.join(folder_path, 'Day 68 (Mongoose Basic Exercise 2)')

os.makedirs(new_folder_path, exist_ok=True)
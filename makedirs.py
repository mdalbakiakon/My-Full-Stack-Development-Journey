import os

folder_path = 'D:\\Working on Programme\\Full-Stack-Development-Journey'
new_folder_path = os.path.join(folder_path, 'Day 70 (React components and props)')

os.makedirs(new_folder_path, exist_ok=True)
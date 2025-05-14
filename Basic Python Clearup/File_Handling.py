secret_file = open("secret.txt", "r")

save_txt = secret_file.read()
secret_file.close()

print(save_txt)


pic_file = open("../Picture Resource/wow.jpg", "rb")
save_pic = pic_file.read()
pic_file.close()

print(save_pic)
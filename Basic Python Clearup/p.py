# file handling
# 7 types of basic mode

# "r" --> read
# "w" --> write
# "a" --> append
# "+" --> read/write
# "t" --> text mode
# "x" --> exclusive file creation if the file exists it will fail
# "b" --> binary mode

# using with is very important in file handling as it automatically close the file after operation

with open("secret.txt", "r") as file:
    x = file.readline()
    y = file.readlines() #.readlines() always returns a list
    print(x)  
    print(repr(x)) #repr() shows a string value including\n\t and so on as a string
    print("-------I am readlines---------")
    print(y)
    file.seek(0)
    print(file.readline()) 
    # for no extra line we can use .strip() 
    file.seek(0)
    x = file.readline().strip()
    print("---------------")
    print(x) # so now no new line is printing
# file handling works as a pointer

# a single line will follow until new line found so

with open("try.txt", "w") as new_file:
    new_file.write("I am a good boy")
    new_file.write("\n\nI am a SWE")
    new_file.write("I want to be a SWE in Google")
    
    # when not use \n the nextline will be add exact the next character from the last line in the file

# a new file has been created 


# | so w mode will create a new one if the file doesnt exist in the directory
# | if it exist it will overright it with a complete new one for example....

with open("try.txt", "w") as completely_new:
    completely_new.write("Hello World")

# |to keep the old file as it as and to write something we will be using append

with open("try.txt", "a") as appending_into_file:
    appending_into_file.write("I am a SWE")
    # keep in mind that the new file will append exact from the next character of the last character
    appending_into_file.write("\nI am writing from a new line now")


# * for both reading and writing at the same time we will use +

# we can use r+ and w+
# r+ will not make any new file if the file exist but if it doesnt exist it will give error
# w+ will make completely a new file wheathe the file exist or not if the same name file exists than it will overwrite it

print("-------------")
with open("new.txt", "w+") as file:
    print(file.readline())  #pointer now at 0
    # so it is printing a blank line as the file doesnot have anything now
    # and if the file is already blank the readline 
    file.write("ABC") #pointer get 0-1-2--> now it is in 3
    print(file.readline()) #at pointer 3 there is no value so it is printing none
    print(file.readline()) #still pointer at 3
    file.seek(0)
    print(file.tell())
    print(file.readline()) # so now pointer is printing from 0-->2 and it is now at 3
    print(file.tell()) #.tell() will show where the pointer is at now
    print(file.readline()) #nothing at pointer 3 so printed a blank line


with open("secret.txt", "r") as file:
    x = file.read()
    print(x)
    print(repr(x))
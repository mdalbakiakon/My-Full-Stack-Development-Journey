# Exception
# File Handling
#! Mystery of Path
# File & Exceptions



# myname----Lower Case
# MYNAME----Upper Case
# my_name----Snake Case
# myName-----Camel Case
# MyName------Pascal Case



#* Error is called as Exception in Python
# The Exception Name is SyntaxError: invalid syntax






#* Built-in Exception
#| SyntaxError -------- Error in the syntax
#! if 10>20 print("Hi") ---- there is a missing : 

#| NameError ------ if var name is not defined
#! print(b)

#| TypeError ------ wrong type in operation Example: print("Age: " + 25) 
#! print("Age: " + 25) ---- in python we can not add str with int but in JS we can Remember it!!!!!!

# ValueError ------ if the value is wrong
#! int("Hello World") ------ "Hello world is a str which can not be turn into int"

#| IndexError ------ if the Index is invalid
# myList = [5,8]
# print(myList[0])
#! print(myList[3]) ----- invalid index

#|KeyError ------- invalid key
myDict = {
    "name" : "John Cena"
}
print(myDict["name"])
#! print(myDict["age"]) 
# ------- invalid key "age"





#? try...........exception
a = 10
b = 0

try:
    c = a/b
    print(f"Value of c: {c}")
    int("Hello")

except ZeroDivisionError:
    print("Bhai 0 diye vag disos")

except ValueError:
    print("Bhai vul value disos")

except:
    print("Bhai jani na ki hoise")
    
# ! here the except is catch!!!!!!


#? What if we dont know what error is getting but we dont want to the terminal to be full on error detect mode but we just want to print it as normal code

try:
    c = a/b
except Exception as e:
    print(e)
    # now it is printing as normal print
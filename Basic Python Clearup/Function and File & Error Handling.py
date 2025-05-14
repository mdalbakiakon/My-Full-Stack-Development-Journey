# greetings
# name = "John"
# print("Hi", name)
# print("How are you?")


# # meal
# print("Prepearing Meal")
# print(f"Inviting {name} to dinner table")
# print("Eat meal together")


# # goodbye
# print(f"Goodbye {name}")


def greetings(name):
    print(f"Hi {name}")


greetings("John")
greetings("Jack")
greetings("Rafa")

#| def means definition
#| defining a function

def greetings():
    print("Hello World\n")
    
greetings()
#! greetings("Rocky")

# so now the problem is the name of the function can be only one even if the argument is there or not
# so the 32 line is invalid now

# ! if we dont call a function it wont work independently or line by line 

# basically it has been overwritten

def greetings_wow(name):
    print("Hi", name, "How are You?")
    print("Welcome to my home.\n")
    


guests = ["Nithin", "Rajib", "Tony"]

for person in guests:
    greetings_wow(person)


# ! when we write ("Hi", name) it will print as hi name so the white space is by default here

print("Welcome", "Jhonny")
print("Welcome" + "Jhonny")
# so in + there is no whitespace

# parameter means the variable name
# when we pass a value we will call it argument the value is argument that is it


print("\n")

# | multiple parameter function

def identity(name, age, blood_group):
    print(f"Name: {name}\nAge: {age}\nBlood Group: {blood_group}")


identity("Rahul", 30, "O+")
#! identity("Suman")
# |This is giving error because we must fullfill the full argument

def identity2(name: str, age: int):
    print(f"{name}")
    print(f"{age}")
    
# we can show our parameter as it is but it doesnot matter even if we dont pass the argument as we define it wont complain

identity2("Wow", "40")
# ! This is positional argument

# so here 40 is not a int but str it is still working

# we can also call a function by naming the parameter

identity2(name="Hello", age="22")
identity2(age="55", name="hii")

# ! This is called keyword argument when we call the parameter = argument



def add(x, y):
    result = x+y
    return result

a=30
b=40
value = add(a,b)
print("value:", value)



# | Scoping/variable scoping

def function_name():
    x=10
    print(x)

#! print(x)
#| This is a error because the variable is not defined as global variable

x = 100

def function():
    x = 10
    print(x) 
    
print(x)
function()
print(x)  #| so here the global is not changing

# |python actually take a new variable even if the name is same 

# global variable can be accessed with the function
var = 500

def x_func():
    print(f"Inside Func: {var}")
    # var = -20
    # ! it will show a error because inside the func so var the function is looking for the var value first inside of it if it gets it will act upon it and if it don't get it will look outside now there is a var inside of this func it can not find any because the var declared or assigned later so the error is showing 
    
x_func()
print(var)

# ! how about we want to use the outsider variable lets see

var = 20

def my_func():
    var = 10
    print(f"Variable: {var}")
    
my_func()
print("Is the var changing?",var)
# so var is not changing

# here the variable inside function is taking the global function

# lets make it as globally use and make the changes of a global variable

globalVar = -2

def funcy_func():
    global globalVar
    globalVar = 8

funcy_func()
print("Changed Global Variable:",globalVar)    
    

print("\n")

# | Iterator
myList = list(range(1,11))
it = iter(myList)
print("I am Iterator")
print(next(it))
print(next(it))
print(next(it))
print(next(it))
print(next(it))
print(next(it))
print(next(it))


print("\n")


# | generator

def gen_func():
    for i in range(0,10):
        yield i

for i in gen_func():
    print(i)
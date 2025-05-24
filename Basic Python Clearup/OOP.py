class car:
    wheels = 4

    def drive(self):
        print("Driving a car")



class cycle:
    wheels = 2
    
    def drive(self):
        print("Riding a cycle")

car1 = car()
car1.drive()


#? TypeError: car.drive() takes 0 positional arguments but 1 was given

# we get this error although we did not gave any argument but the Python is saying 1 was given here is why

# the fact is when we make a object car1 and we write car1.drive()

# actually python makes it like this car.drive(car1)
# so the object itself python takes as argument of the class

# so self is mendatory to work just to nullify that 1 was given thing that we are sending the car1 object itself as self

print(car1.wheels)

cycle1 = cycle()
print(cycle1.wheels)


car2 = car()
car2.wheels = "I am car2 Wheels"

print(car2.wheels)
print(car().wheels)
print(car().drive()) #it will return none because drive method is not returning anything and we using print() it means it will print what the drive return there fore it is printing none

car().drive() #! it means from the class car()
# car.drive() 
#! it means there is an object name car and go to it's drive method it will throw error because we did not make any object name as car yet

car = car()
car.drive()
# ? now it is working!

print("\n")

#|Constructor!!

# constructor helps to make an object of a class by using __init__(self)


class Person:
    name = "Siam"
    occ = "Developer"
    
    def info(self):
        print(f"{self.name} is a {self.occ}")

a = Person()
a.info()
a.name = "Mishkath"
a.occ = "Dr. of Pharmacy"
a.info()


# what if i dont want to use any default value than we use the constructor

class Person1:
    def __init__(self):
        print("Hello World")   #!This is called a default constructor
    def info(self):
        print(f"{self.name} is a good {self.gender}")

a = Person1()    
b = Person1()

# so whenever we make an object of a class the __init__(self) will definately run this is a function which will run whenever the object is created even though we never called it


class Person1:
    def __init__(self, name, gender):    #! This is called parameter constructor
        self.name = name
        self.gender = gender
        
    def info(self):
        print(f"{self.name} is a good {self.gender}")

a = Person1("Siam", "boy")    
b = Person1("Mishkath", "girl")

a.info()
b.info()

print("\n")

class Company:
    companyName = "Google"
    noOfEmployee = 0
    noOfYears = 5
    
    def __init__(self, name):
        self.name = name
        self.salary = 10000
        Company.noOfEmployee += 1
    
    def showDetails(self):
        print(f"Employee Name: {self.name}\nSalary: {self.salary}\nCompany Name: {self.companyName}\n")
    
    
emp1 = Company("X")
emp2 = Company("Y")
emp3 = Company("Z")

emp1.showDetails()
emp2.showDetails()
emp3.showDetails()


print(Company.noOfEmployee)
print(emp1.companyName)
print(emp1.noOfYears)
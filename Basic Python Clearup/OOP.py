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
# a = 12
# print(a)
# print(type(a))

# x = "Md Al Baki Akon"

# print(x[3])

# print(x.upper())

# print(len(x))

# y = 24

# print(f"My Name is {x}. I am {y} years old.")

# name = input("Enter Name: ")
# print(f"Weclome, {name}")

x = "Welcome"
y = "Python"
z = 25

print(x+y)
print(x+ " " +y)
print(f"{x} {y}. It's been {z} years since I was born")
print(f"Hello world my name in curly braces is {{Siam}}")
print(f"Hello world my name in curly braces is {{Siam")
print("Teacher said, \"Good Morning class.\"")                  #!escape sequence

address = "194, Majheerghat Road, Chattogram"

print(address[:10])
print(address[7:])
print(address[:len(address)])
print(address[:4] + address[10:])


address = address + ", Bangladesh"
print(address)

import math

print(math.cos(0))                                          #! here .cos() in radient

# * let's make the radient into degree and vice versa

x_rad = math.radians(90)

print(x_rad)
#! so 90 deg in radians is 1.5707963267948966

print(math.cos(x_rad))

# * so the value is coming extremely near to Zero which is 6.123233995736766e-17

# let's fix it with using round()

print(round(math.cos(x_rad), 2))
# so now it is 0.0

print(round(2.4567,2))
#! using %.2f to show the value without round()

x = math.cos(x_rad)

print(f"Value: {x:.2f}")
print(float(f"{math.cos(x_rad):.2f}"))
print(2.40)

# ! float value ignore the last 0 what so ever we give .2f but string does not
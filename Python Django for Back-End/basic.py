x = "Welcome"
y = "Python"
z = 25

print(x + y)
print(x + " " + y)
print(f"{x} {y}. It's been {z} years since I was born")
print(f"Hello world my name in curly braces is {{Siam}}")
print(
    f"Hello world my name in curly braces is {{Siam"
)  # Missing closing brace, but kept as-is
print('Teacher said, "Good Morning class."')  # Escape sequence

address = "194, Majheerghat Road, Chattogram"

print(address[:10])
print(address[7:])
print(address[: len(address)])
print(address[:4] + address[10:])

address = address + ", Bangladesh"
print(address)

import math

print(math.cos(0))  # Cosine in radians

# Convert radians to degrees and vice versa
x_rad = math.radians(90)
print(x_rad)  # 90 deg in radians is ~1.5708
print(math.cos(x_rad))  # Extremely close to zero (~6.12e-17)

# Rounding the value
print(round(math.cos(x_rad), 2))  # Now it's 0.0
print(round(2.4567, 2))

# Using %.2f formatting (alternative to round)
x = math.cos(x_rad)
print(f"Value: {x:.2f}")

print(float(f"{math.cos(x_rad):.2f}"))  #| Explicitly convert formatted string to float
print(2.40)  #| Float ignores trailing zero


a = 2.4567
print(f"{a:.2f}")  #? Rounds to 2.46

b = 2.3278
print(f"{b:.2f}")  #* Rounds to 2.33

c = 2.40000
print(f"{c:.2f}")  #! Forces 2.40 as string

# Using round() for simplicity
d = 5.284903
print(round(d, 3))  # Rounds to 5.285

boolme = True

if boolme:
    print(f"The Condition was {boolme}")

x = f"The Condition was {boolme}"
print(x)
print(type(x))  # <class 'str'>

print(round(4.50, 2))  # Returns 4.5 (float drops trailing zero)
print(str(round(4.50, 2)))  # Converts to "4.5"
print(f"{4.50:.2f}")  # Forces "4.50" as string

age = int(input("Enter Your Age: "))
print(age)

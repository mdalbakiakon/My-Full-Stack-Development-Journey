# A password must have 8 digit at minimum
# A password must have at least an Alphabet
# A password must have at least a Digit
# A password must have at least a lowercase
# A password must have at least a Uppercase
# A password must have at least a Special Character


import sys

password = input("Enter Your Password: ")

if len(password) < 8:
    print("You must give a 8 digit Password at least")
    sys.exit()

final_check = []

alphaValid = any(x.isalpha() for x in password)
final_check.append(alphaValid)

digitValid = any(x.isdigit() for x in password)
final_check.append(digitValid)

lowerValid = any(x.islower() for x in password)
final_check.append(lowerValid)

upperValid = any(x.isupper() for x in password)
final_check.append(upperValid)

specialValid = any(not x.isalnum() for x in password)
final_check.append(specialValid)

if not all(final_check):
    print("Invalid Password!!!\nYour Password must have at least one Alphabet, Digit, Lower Case, Upper Case and a Special Character!")
    sys.exit()

print("Congratulation!!! Your Password is valid")
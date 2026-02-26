n = 5873

# print each digit in reverse order
num = n

while num != 0:
    print(num%10)
    num = num // 10    


# count digit in the number
n = 1234559
num = n
count = 0

while num>0:
    count += 1
    num = num // 10

print("count", count)    


# more easy way use logarithm
n = 1532 
import math
print("count", math.ceil(math.log(n, 10)))
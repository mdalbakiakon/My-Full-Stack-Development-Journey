
# | DSA 
# ! List

emptyList = []
print(type(emptyList))

emptyTuple = ()
print(type(emptyTuple))

x = (5)
print(type(x)) #?this is not tuple for tuple we need to use comma

y = (5,)
print(type(y))

z = {}
print(type(z)) #?this is dict not set!!!



#! s = {,} this is not valid like tuple
s=set({}) 
print("Type: ",type(s))

# ? now it is set we have to use set()


# | Method of list
a = []
a.append("Tomato")
print(a)
a.extend(["Banana", "Apple"])
print(a)

print(a[::-1])

a = a + ["Banana", "Cherry", "Cucumber"]

print(a)
a.sort()

print(a) #now the list has been sorted according to the Alphabetic order
# what if we want it to be sorted according to the length of the word

a.sort(key=len)
print("Sorting According to length: ", a)

a.sort(key=len, reverse = True)
print("In reversing order: ", a)

# if the length is equal it will follow alphabetic 


print(a)

myList = [1,24,34,90,2,3]
print(myList[:])
print(myList[::-1])
print(myList[::2])
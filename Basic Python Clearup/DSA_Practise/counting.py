from collections import Counter

myList = [1,2,3,4,5,1,2,1,1,3,4,5,6,7,8,9,0,0,0,0]
myList.sort()
count = Counter(myList)
print(count.most_common())

x = range(1,10)
print(list(x))
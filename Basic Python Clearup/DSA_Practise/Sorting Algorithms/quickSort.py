# def partition(arr, low, high):
#     pivot = arr[high]
#     i = low - 1
    
#     for j in range(low, high):
#         if arr[j] <= pivot:
#             i += 1
#             arr[i], arr[j] = arr[j], arr[i]

#     arr[i+1], arr[high] = arr[high], arr[i+1]
#     return i+1


# def quickSort(arr, low=0, high=None):
#     if high is None:
#         high = len(arr) - 1

#     if low < high:
#         pivot_index = partition(arr, low, high)
#         quickSort(arr, low, pivot_index-1)
#         quickSort(arr, pivot_index+1, high)



# arr = [64,34,25,12,22,11,90,5]
# print(arr)
# quickSort(arr)
# print(arr)


# more simple
def quickSort(arr):
    if len(arr) <=1 :
        return arr

    pivot = arr[len(arr)-1]
    left = []
    right = []
    
    for i in range(len(arr)-1):
        if arr[i] <= pivot:
            left.append(arr[i])
        else:
            right.append(arr[i])
    
    return quickSort(left) + [pivot] + quickSort(right)



arr = [64,34,25,12,22,11,90,5]
print(arr)
sortedArr = quickSort(arr)
print(sortedArr)
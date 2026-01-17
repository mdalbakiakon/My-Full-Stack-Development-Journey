# Solving O(n^2) problems using 2 pointer approach
# Example 1: Given an array, find a pair with a given sum

def find_pair_with_sum(arr, target_sum):
    left = 0
    right = len(arr)-1
    
    while left<right:
        if arr[left] + arr[right] == target_sum:
            return [left, right]
        
        right-=1
        
        if left == right:
            left+=1
            right = len(arr)-1
            
            
arr = [1,2,3,4,5,15,6,7,8,9]
result = find_pair_with_sum(arr, 20)
print(result)


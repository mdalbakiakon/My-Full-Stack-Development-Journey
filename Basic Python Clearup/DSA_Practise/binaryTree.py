class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

# print(root.val, "->", root.left.val, "->", root.right.val)
# Tree looks
#            1
#          /   \
#         2     3
#        /\    /\
#       4 5   6 7

# DFS Traverse

def inOrder(node):
    if node:
        inOrder(node.left)
        print(node.val, end=" ")
        inOrder(node.right)

print("In Order Traverse:", end=" ")
inOrder(root)
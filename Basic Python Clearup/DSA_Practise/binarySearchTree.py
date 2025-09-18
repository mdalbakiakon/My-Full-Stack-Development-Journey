class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        

class BST:
    def __init__(self):
        self.root = None
    
    def add(self, val):
        if self.root is None:
            self.root = Node(val)
            print("\nRoot Node Created!")
            return  # stop here, no need to continue
        
        current = self.root
        
        while True:
            if val == current.val:
                print("BST don't allow same value!")
                break

            if val < current.val:
                if current.left is None:
                    current.left = Node(val)
                    print("Insertion Succeed!")
                    break
                else:
                    current = current.left
            else:
                if current.right is None:
                    current.right = Node(val)
                    print("Insertion Succeed!")
                    break
                else:
                    current = current.right
                

    def traverse_inOrder(self, node=None):
        if node is None:
            node = self.root

        if node is None:
            print("Tree is Empty!")
            return

        if node.left is not None:
            self.traverse_inOrder(node.left)

        print(node.val, end=" ")

        if node.right is not None:
            self.traverse_inOrder(node.right)



myTree = BST()
myTree.add(5)
myTree.add(7)
myTree.add(72)
myTree.add(2)
myTree.add(8)
myTree.add(80)
myTree.add(1)
print("In Order Traversal:", end=" ")
myTree.traverse_inOrder()

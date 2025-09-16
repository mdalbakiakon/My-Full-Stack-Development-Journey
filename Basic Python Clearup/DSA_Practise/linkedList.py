import sys

class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


dummy_head = Node(0) 

def create_linked_list():
    node_list = list(map(int, (input("Enter all nodes separated by space: ").strip().split(" "))))

    header_flag = 0
    prev = None  
    
    for i in range(len(node_list)):
        node = Node(node_list[i])
        
        if header_flag == 0:   
            dummy_head.next = node
            header_flag = 1
        else:
            prev.next = node   
        
        prev = node  


def traverse():
    currentNode = dummy_head.next
    
    if not currentNode:
        print("Linked List is empty")
        return

    while currentNode:
        print(currentNode.data, end=' -> ')
        currentNode = currentNode.next
    print("null")


if __name__ == "__main__":
    print("Menu:")
    print("=============================")
    print("1) Create Linked List")
    print("2) Traverse Linked List")
    print("3) Terminate\n\n")
    
    flag = True
    
    while flag:
        user_input = input("Enter Your Choice: ")
    
        if user_input == "1":
            create_linked_list()
        
        elif user_input == "2":
            traverse()
            
        elif user_input == "3":
            flag = False
            sys.exit()

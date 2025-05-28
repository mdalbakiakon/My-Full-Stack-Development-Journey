class Employee:
    def __init__(self):
        self.name = "Public John"           #? Public attribute
        self.__name2 = "Private John"       #! Private attribute (name mangling)
        self._name3 = "Protected John"      #* Protected attribute (by convention)

# Creating an instance
a = Employee()

# Dynamically adding an attribute at runtime
a.emp1 = 5  #? In Python, we can add instance attributes dynamically

# Accessing public attribute
print(a.name)  # Output: Public John

#! Accessing private attribute directly will fail
# print(a.__name2)  # ❌ AttributeError

# But we can access it using name mangling (not recommended for regular use)
print(a._Employee__name2)  # Output: Private John

#| Viewing all attributes of the object
print(a.__dir__())  # OR
print(dir(a))       #| Lists all attributes including mangled names here we can find how ithe private attribute is maintained

#* Accessing protected attribute
print(a._name3)  # Output: Protected John

#! '_name3' is protected by convention (not enforcement).
#! Accessible externally, but marked for internal use only.
#! And it is a hint for dev that stay concern about using it nothing to do with protect mean
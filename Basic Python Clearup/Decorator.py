
#! Decorator is a function which takes function as input and return a function


def greet(fx):
    def mfx():
        print("Welcome")
        fx()
        print("Thank You")
    
    return mfx


@greet
def hello():
    print("Hello World")
    
    

hello()

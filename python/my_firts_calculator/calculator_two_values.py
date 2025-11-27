print (" \n === My firts calculator === \n")

def add(a, b):
    result = a+b
    return result

def subtract(a, b):
    result = a-b
    return result

def multiply(a, b):
    result = a*b
    return result

def divide(a, b):
    try:
        result = a/b
        return result
    except ZeroDivisionError:
        print("Cannot divide by zero")

def mod(a, b):
    result = a%b
    return result

def power(a, b):
    result = a**b
    return result

def enter_value():
    a = int(input("Enter value 1: \n>"))
    b = int(input("Enter value 2: \n>"))
    return a, b

def menu():

    print("===User menu=== \n")
    print("Choose an option \n")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Module")
    print("6. Power")
    print("7 Exit")
    
    while True:
        try:
            option = int(input("Enter your choice: ")) 
        except ValueError:
            print("Error: Please, enter a valid option ")  
            continue
    
        match option:
            case 1:
                a, b = enter_value()
                print(f"\n The result is: {add(a, b)}")
            case 2:
                a, b = enter_value() 
                print(f"\n The result is: {subtract(a, b)}")
            case 3: 
                a, b = enter_value()
                print(f"\n The result is: {multiply(a, b)}")
            case 4: 
                a, b = enter_value()
                print(f"\n The result is: {divide(a, b)}")
            case 5: 
                a, b = enter_value()
                print(f"\n The result is: {mod(a, b)}")
            case 6: 
                a, b = enter_value()
                print(f"\n The result is: {power(a, b)}")
            case 7:
                print("Exiting...")
                break
            case _:
                print("Error: Please, enter a valid option")
                continue

menu()




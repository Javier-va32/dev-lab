print("===================")
print("Ejercicio FIZZBUZZ")
print("===================")

#Primero generamos los números del 1 al 100

for i in range(1,101):
    #Ahora comprobamos si el número seleccionado es divisible entre 3 y 5
    if i % 3 == 0 and i%5 == 0: 

        '''
        Para que la condición se cumpla, ambas premisas deben ser verdaderas.
        Es importante que se evalúe primero esta condición antes que las siguientes.
        '''
        print(f"{i}: FizzBuzz")
    #Si el if es false, entonces evaluamos si el número es divisible solo por 3 o 5
    elif i % 3 == 0:
        print(f"{i}: FIZZ")
    elif i % 5 == 0:
        print(f"{i}: BUZZ")
    #Se imprimen los números que no cumplen ninguna condición
    else:
        print(i)

print("______________________________________")
print("====================================")
print("Ejercicio FIZZBUZZ versión extendida")
print("====================================")

for i in range(1,106):
    output = "" #La lógica es que output permanecerá como false si no cumple ninguna condición

    if i % 3 == 0:
        output += "FIZZ"
    if i % 5 == 0:
        output += "BUZZ"
    if i % 7 == 0:
        output += "WOOF"

    # Ahora mostramos los resultados en consola
    print(output or i) #un string vacio es false, por lo tanto, si el número no cumplió ninguna condición, solo se mostrará i


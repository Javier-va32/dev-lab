'''
=================================
Encontrar el número mayor y menor
=================================
'''

#Comenzamos con una lista de ejemplo

lista = [-8, 10, 2, 5, 20, 71, -25, 3, 11]

#Necesitamos dos variables para guardar el resultado durante la iteraicón
maximo = lista[0]
minimo = lista[0]
#Ambas variables tomarán el primer valor de la lista, así respetaremos negativos y positivos
#Luego recorrermos la lista con for
for i in lista:
    if i > maximo:
        maximo = i #Guardamos el número más grande de la iteración actual
    if i < minimo:
        minimo = i #Guardamos el número más pequeño de la iteración actual

print(f"El número mayor de la lista es: {maximo}")
print(f"El número menor de la lista es: {minimo}")
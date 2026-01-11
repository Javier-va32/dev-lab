'''
===================================================
Ejercicio tipo entrevista: devolver un diccionario
con la cantidad de veces que se repite cada palabra
===================================================
'''

#Texto de ejemplo
texto = "hola mundo hola Python mundo hola"

'''
Necesitamos convertir el texto en una lista.
En python, cuando encadenamos métodos, siempre contamos de izquierda a derecha.
En este caso, primero ejecutaremos el método lower() y luego split()
'''
palabras = texto.lower().split()

#Ahora debemos evaluar las palabras repetidas y agregarlas al diccionario
d = {} #diccionario vacío
for p in palabras:
    if p in d:     #Se verifica si la plabra ya existe en el diccionario
        d[p] += 1
    else:
        d[p] = 1    #Si no existe, se le agrega un valor, para que así cada palabra aparezca al menos una vez.

print(d)


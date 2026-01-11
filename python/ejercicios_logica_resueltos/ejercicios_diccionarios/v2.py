'''
===================================================
Versión más difícil: Debes limpiar el string, 
eliminar stopwords, signos y ordenar el diccionario 
según frecuencia de repeticinoes
===================================================
'''

#String de ejemplo
texto = "El mundo de la programación y el mundo real. ¡Hola, mundo!"
#Crearemos una lista con las palabras que queremos filtrar
stopwords = ["el", "de", "la", "y"]
#Ahora procedemos a preparar el string para recorrerlo con for
palabras = texto.lower().replace(".", "").replace("¡", "").replace("!", "").replace(",","").strip().split()

d = {} #creamos un diccionario vacío
#Evaluamos la lista para encontrar la frecuencia de repetición
for p in palabras:
    if p in stopwords:
        continue #Ignoramos stopwords
    if p in d:
        d[p] +=1
    else:
        d[p] = 1

# Ordenamos los pares (palabra, frecuencia) de mayor a menor frecuencia.
# d.items() convierte el diccionario en una lista de tuplas (palabra, frecuencia).
# key=lambda x: x[1] indica que se usará la frecuencia (índice 1 de la tupla) como criterio para ordenar.
# reverse=True invierte el orden para que los valores más altos aparezcan primero.
d_ordenado = sorted(d.items(), key=lambda x: x[1], reverse=True)



print(d_ordenado)

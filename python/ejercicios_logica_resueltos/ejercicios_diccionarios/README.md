# 🧩 Contar palabras repetidas V1

**Nivel:** Fácil  

## 📝 Descripción

Dado un texto, se separa en palabras y se cuenta cuántas veces aparece cada una, almacenando los resultados en un diccionario.  
Este ejercicio es útil para practicar el procesamiento de cadenas y el uso de estructuras de datos básicas en Python.

## 🧠 Conceptos involucrados

- Método `split()` para separar texto en palabras
- Método `lower()` para normalizar el texto
- Diccionarios (`dict`) para contar ocurrencias
- Condicionales (`if`)
- Bucle `for`

## 🧪 Ejemplo de implementación

```python
texto = "hola mundo hola Python mundo hola"

# Convertimos el texto a minúsculas y lo separamos en palabras
palabras = texto.lower().split()

# Diccionario para contar las apariciones de cada palabra
d = {}

for p in palabras:
    if p in d:
        d[p] += 1
    else:
        d[p] = 1

print(d)  # {'hola': 3, 'mundo': 2, 'python': 1}
```

## 🎯 Notas

Este ejercicio es útil para aprender:

- Cómo procesar cadenas de texto
- Cómo usar diccionarios para contar elementos
- Cómo identificar patrones repetidos
- Cómo aplicar lógica básica de acumulación en bucles
---

# 🧩 Contar palabras repetidas V2

**Nivel:** Medio  

## 📝 Descripción

Versión extendida del ejercicio anterior.  
Además de contar palabras, este ejercicio incluye:

- Normalizar el texto a minúsculas
- Eliminar signos de puntuación
- Filtrar palabras irrelevantes (stopwords)
- Ordenar el resultado final según la frecuencia de repetición

Este tipo de procesamiento es común en análisis de texto (NLP) y motores de búsqueda.

## 🧠 Conceptos involucrados

- Métodos `lower()`, `replace()`, `split()`, `strip()`
- Eliminación de caracteres
- Filtrado de listas mediante condiciones (`if`, `continue`)
- Diccionarios (`dict`) como contadores
- Ordenamiento con `sorted()` y `key=lambda`
- Tuplas `(clave, valor)`

## 🧪 Ejemplo de implementación

```python
texto = "El mundo de la programación y el mundo real. ¡Hola, mundo!"

# Stopwords que no queremos considerar
stopwords = ["el", "de", "la", "y"]

# Normalizamos, eliminamos signos y separamos en palabras
palabras = texto.lower().replace(".", "").replace("¡", "").replace("!", "").replace(",", "").strip().split()

d = {}  # Diccionario para contar apariciones

for p in palabras:
    if p in stopwords:
        continue  # Ignoramos las stopwords
    if p in d:
        d[p] += 1
    else:
        d[p] = 1

# Ordenamos por frecuencia de mayor a menor
d_ordenado = sorted(d.items(), key=lambda x: x[1], reverse=True)

print(d_ordenado)
# Ejemplo de salida: [('mundo', 3), ('programación', 1), ('real', 1), ('hola', 1)]
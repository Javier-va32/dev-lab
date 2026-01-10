# 🧩 Encontrar el número mayor y menor

### Nivel: Fácil

**Descripción:**
Dado un conjunto de números, se recorre la lista y se determina cuál es el valor **máximo** y cuál es el **mínimo**, sin usar funciones como `max()` o `min()`.

El punto clave de este ejercicio es **inicializar** los valores con el primer elemento de la lista para que funcione correctamente con números **negativos** y **positivos**.

---

## 🧠 Conceptos involucrados

* `for` (bucle)
* Comparación (`>`, `<`)
* Variables acumuladoras
* Listas en Python
* f-strings (para imprimir resultados)

---

## 🧪 Ejemplo de implementación

```python
lista = [-8, 10, 2, 5, 20, 71, -25, 3, 11]

maximo = lista[0]
minimo = lista[0]

for i in lista:
    if i > maximo:
        maximo = i
    if i < minimo:
        minimo = i

print(f"El número mayor de la lista es: {maximo}")
print(f"El número menor de la lista es: {minimo}")
```

---

## 🎯 Notas

Este ejercicio es útil para aprender:

* Cómo recorrer colecciones
* Cómo guardar resultados durante la iteración
* Por qué conviene usar el **primer elemento** como referencia inicial
* Cómo trabajar con listas que contienen valores negativos

También es una forma simple de entender el patrón de **reducción manual**, común en entrevistas y ejercicios de fundamentos.

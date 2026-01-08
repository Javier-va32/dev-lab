# PyCompany

**PyCompany** es un proyecto de aprendizaje desarrollado como parte de una práctica en Python.  
Su objetivo es poner en práctica conceptos de **funciones, estructuras de control, entrada de datos y menús interactivos**.

---

## Objetivo del proyecto

El propósito principal de este programa es **simular un sistema básico de gestión de empleados**, capaz de:

1. **Ingresar los datos** de un trabajador (nombre, edad, cargo, sueldo y porcentaje de bono).  
2. **Calcular automáticamente** el bono y el sueldo final.  
3. **Mostrar un resumen completo** de la información ingresada y los cálculos realizados.  

---

## Cómo funciona

Al ejecutar el programa (`python pycompany.py`), se muestra un menú interactivo:

=== Bienvenido a PyCompany ===

1. Ingresar datos del empleado

2. Calcular bono

3. Mostrar resumen

4. Salir


### Flujo general:

1. **Opción 1** → El usuario ingresa los datos del empleado.  
2. **Opción 2** → Se calcula el bono multiplicando el sueldo base por el porcentaje indicado.  
   - Por ejemplo: un sueldo base de `700000` con un bono de `0.2` genera un bono de `140000` CLP.  
3. **Opción 3** → Se muestra un resumen con toda la información ingresada y calculada.  
4. **Opción 4** → Finaliza el programa mostrando un mensaje de despedida.  

El código está dividido en funciones independientes, para favorecer la modularidad y facilitar futuras mejoras.

---

## 🧠 Estructura del código

- `ingresar_datos_usuario()` → Solicita y devuelve la información básica del trabajador.  
- `calcular_bono()` → Realiza los cálculos del bono y sueldo final.  
- `mostrar_resultados()` → Imprime los datos y resultados en pantalla.  
- `mensaje_despedida()` → Muestra el mensaje de cierre.  
- `menu()` → Controla la interacción con el usuario a través de un bucle `while`.

---

## Posibles mejoras futuras

- ✅ **Validaciones con `try-except`** para evitar errores si el usuario ingresa letras en lugar de números.  
- ✅ **Control de flujo más robusto**, impidiendo calcular o mostrar resultados sin haber ingresado los datos.  
- ✅ **Soporte para múltiples empleados**, guardando los registros en una lista o archivo `.csv`.  
- ✅ **Interfaz gráfica (GUI)** con `tkinter` o una versión web usando `Flask`.  
- ✅ **Persistencia de datos** en base de datos o archivos JSON para mantener los registros entre ejecuciones.  

---

📘 *“Cada línea de código escrita hoy es un paso hacia el programador que serás mañana.”*

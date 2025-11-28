# 📘 Proyecto: Ejercicios de QA y Testing con Jest

Trabajo realizado para el **Bootcamp Generation – Full Stack Java**.

Este proyecto forma parte de mis prácticas relacionadas con **pruebas unitarias**, **control de calidad (QA)** y **TDD (Desarrollo Orientado a Pruebas)** utilizando JavaScript y Jest.  
El objetivo principal es fortalecer mi comprensión sobre cómo testear funciones, validar comportamientos esperados y manejar casos especiales dentro de un entorno de programación realista.

---

## 📂 Contenido del Proyecto

Este ejercicio se encuentra dentro de la carpeta:

js/ad-l11-1.0

markdown
Copiar código

Incluye dos módulos principales:

### ✔ Módulo Calculator
Contiene funciones matemáticas básicas:  
- `add`  
- `subtract`  
- `multiply`  
- `divide`  

También incorpora:
- Pruebas unitarias con Jest.  
- Implementación de **TDD** para manejar adecuadamente la división por cero.

### ✔ User & UserController
Incluye:
- Clase `User`
- Clase `UserController`, que administra una lista de usuarios en memoria.

Las pruebas realizadas cubren:
- `add()`: agregar un usuario.
- `remove()`: eliminar usuarios.
- `findByEmail()`: buscar por correo electrónico.
- `findById()`: buscar por identificador.

---

## ⚙️ Cómo Ejecutar el Proyecto

1. Instalar dependencias del proyecto:
   ```bash
   npm install
Ejecutar las pruebas unitarias:

bash
Copiar código
npm test
Jest procesará todas las pruebas y validará el comportamiento correcto de cada función y clase, incluyendo manejo de errores y búsqueda dentro de colecciones.

💡 Reflexión Personal
Este trabajo me permitió comprender mejor cómo funciona el ecosistema de pruebas unitarias y cómo ayudan a garantizar la calidad del software desde etapas tempranas.
Aplicar TDD me obligó a pensar primero en el comportamiento esperado antes de escribir el código, lo cual fortaleció mi lógica y mi forma de estructurar soluciones. Además, reforcé buenas prácticas de organización y versionamiento dentro de un proyecto JavaScript.

# 🧾 Tareas de Constructores en JavaScript

Estas tareas tienen como objetivo practicar el uso de **funciones constructoras**, el operador **`new`** y la palabra clave **`this`**, aplicando los conceptos básicos de **Programación Orientada a Objetos** en JavaScript.

---

## 📘 Explicación corta de cada tarea

### 📨 **Tarea 1 – Mail**
Se crea un constructor `Mail` que guarda un **asunto** y un **mensaje**.  
El objetivo fue entender cómo inicializar propiedades dentro de un objeto creado con `new`.:contentReference[oaicite:0]{index=0}

---

### 📨 **Tarea 2 – Mail con parámetros del usuario**
Se mejora la tarea anterior: ahora el asunto y el mensaje se obtienen desde **líneas de comando** usando `process.argv`.  
Esto permitió practicar cómo enviar datos dinámicamente al crear un nuevo objeto.:contentReference[oaicite:1]{index=1}

---

### 📨 **Tarea 3 – Mail con método interno**
Aquí se agrega un **método dentro del constructor** llamado `printMail()`, que muestra los datos formateados.  
Esta tarea refuerza cómo `this` permite acceder a las propiedades del mismo objeto desde sus métodos.:contentReference[oaicite:2]{index=2}

---

### 🚕 **Tarea 4 – Journey**
Se crea un constructor `Journey` para representar un viaje con **origen** y **destino**, ambos recibidos por consola.  
Sirve para practicar el uso de `this` al guardar datos provenientes de parámetros y mostrarlos en un mensaje final.:contentReference[oaicite:3]{index=3}

---

### 👥 **Tarea 5 – FriendsList**
El constructor `FriendsList` inicia una lista vacía de amigos.  
Con un bucle `for`, se agregan nombres recibidos por consola, demostrando cómo inicializar y modificar propiedades de tipo **array** en objetos creados con `new`.:contentReference[oaicite:4]{index=4}

---

### 🛒 **Tarea 6 – ShoppingList**
Crea un constructor `ShoppingList` para almacenar **artículos y cantidades**.  
Cada producto se guarda como un objeto `{name, quantity}` dentro de una lista.  
Aquí se combina el uso de objetos, arrays y el paso de parámetros desde `process.argv`.:contentReference[oaicite:5]{index=5}

---

### 🚗 **Tarea 7 – Car**
Define un constructor `Car` con varias propiedades como **marca**, **modelo**, **año**, **motor**, **color** y **kilometraje**, además de un método `describe()` que imprime toda la información del coche.  
Fue la tarea más completa y sirvió para aplicar todo lo aprendido sobre constructores, `this` y métodos.:contentReference[oaicite:6]{index=6}

---

## ⚙️ Uso de `this`, `new` y constructores

- **`this`**: se usó dentro de los constructores para referirse al objeto que se está creando.  
  Ejemplo: `this.brand = brand;` asigna el valor del parámetro `brand` a la propiedad del objeto.

- **Constructores**: son funciones que definen la estructura de un objeto.  
  Se escriben con **mayúscula inicial** (por convención) y permiten crear múltiples instancias con la misma forma.

- **`new`**: crea un nuevo objeto basado en el constructor, enlazando `this` al nuevo objeto.  
  Ejemplo: `const myCar = new Car("Toyota", "Corolla", 2020, ...);`

---

## 🧠 Reflexión final

### 🔹 ¿Qué diferencia hay entre usar objetos literales y funciones constructoras?
Los **objetos literales** sirven para crear una sola instancia específica.  
Las **funciones constructoras**, en cambio, permiten crear **muchos objetos similares** de manera dinámica, reutilizando la misma estructura y lógica.

---

### 🔹 ¿Cómo ayuda `this` dentro de un constructor?
`this` conecta los parámetros o variables con las propiedades del objeto que se está construyendo.  
Sin `this`, los valores quedarían como variables sueltas, sin formar parte del nuevo objeto.

---

### 🔹 ¿Qué similitudes encuentras con las clases de otros lenguajes?
Las funciones constructoras funcionan como **clases simples** en lenguajes como Python o Java:  
definen propiedades, métodos y permiten crear objetos usando `new`, igual que al instanciar una clase (`new` en Java o `obj = Clase()` en Python).

---

✍️ *Autor: Javier-va32


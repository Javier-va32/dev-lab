function Car(brand, model, year, engineType, color, mileage) {
this.brand = brand;
this.model = model;
this.year = year;
this.engineType = engineType;
this.color = color;
this.mileage = mileage;

  // Método para mostrar la descripción completa
this.describe = function() {
    console.log("Descripción del coche:");
    console.log(
    `${this.brand} ${this.model} (${this.year})\n` +
    `Motor: ${this.engineType}\n` +
    `Color: ${this.color}\n` +
    `Kilometraje: ${this.mileage} km`
    );
};
}

// === Ejemplo de uso ===
const myCar = new Car("Toyota", "Corolla", 2020, "Gasolina", "Rojo", 45000);
myCar.describe();


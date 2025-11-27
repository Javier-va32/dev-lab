function ShoppingList() {
    this.items = [];
}

// cantidad de productos que el usuario pondrá
const count = parseInt(process.argv[3]);
const myList = new ShoppingList();

// Ejemplo de ejecución:
for (let i = 0; i < count; i++) {
  const product = process.argv[4 + (i * 2)];
  const quantity = process.argv[5 + (i * 2)];

    myList.items.push({ name: product, quantity: quantity });
}

console.log("🛒 Lista de compras:");
console.log(myList.items);

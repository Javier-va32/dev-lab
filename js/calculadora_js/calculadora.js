import promptSync from 'prompt-sync';
const prompt = promptSync();

function sumar(a, b) {return a + b;}
function restar(a, b) {return a - b;}
function multiplicar(a, b) {return a * b;}
function dividir(a, b) {
    if (b === 0) {
        return "Error: no se puede dividir por cero";
    }
    return a / b;
}
function modulo(a, b) {return a % b;}
function potencia(a, b) {return a ** b;}
function raiz(a, b) {
    // Si es una raíz par y el número es negativo → error matemático
    if (a < 0 && b % 2 === 0) {
        return "Error: no se puede calcular raíz par de un número negativo";
    }
    return a ** (1 / b);
}

function ingresar_valor() {
    const a = Number(prompt("Ingrese el primer número: "));
    const b = Number(prompt("Ingrese el segundo número: "));
    return {a, b};
}

function menu() {
    console.log("=== Menú de inicio ===");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Módulo");
    console.log("6. Potencia");
    console.log("7. Raíz n-ésima");
    console.log("9. Salir");

    while (true) {
        try {
            const opcionStr = prompt("Ingrese la opción deseada (1 al 9): ");
            const opcion = Number(opcionStr);
            // Verificar que la opción sea un número entero válido
            if (!Number.isInteger(opcion)) {
                console.log("Error: la opción debe ser un número entero.");
                continue; // vuelve a pedir la opción
            }
            if (opcion >= 1 && opcion <= 8) {
                const { a, b} = ingresar_valor();
                switch (opcion) {
                    case 1:
                        console.log("El resultado de la suma es:", sumar(a, b));
                        break;
                    case 2:
                        console.log("El resultado de la resta es:", restar(a, b));
                        break;
                    case 3:
                        console.log("El resultado de la multiplicación es:", multiplicar(a, b));
                        break;
                    case 4:
                        console.log("El resultado de la división es:", dividir(a, b));
                        break;
                    case 5:
                        console.log("El resultado del módulo es:", modulo(a, b));
                        break;
                    case 6:
                        console.log("El resultado de la potencia es:", potencia(a, b));
                        break;
                    case 7:
                        console.log("El resultado de la raíz es:", raiz(a, b));
                        break;
                }
            }
            else if (opcion === 9) {
                console.log("Saliendo del programa...");
                break
            }
            else if (opcion <= 0 || opcion > 9) {
                console.log("Opción inválida. Debe ingresar un número entre 1 y 9.");
            }
        }
        catch (error) {
            console.log("Ocurrió un error: " + error.message);
        }
    }    
}

function main() {
    menu();
}

main();
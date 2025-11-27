// Refer to Task 6 in your Instructions to complete this task

import promptSync from 'prompt-sync';
const prompt = promptSync();

    const tipo = prompt("¿Desea guardar números o texto? (N/T) ").toLowerCase();

    if(tipo === "t") {
        let textos = [];
        while(true) {
            const texto = prompt("Ingrese una palabra: ");
            textos.push(texto);
            const continuar = prompt("¿Quiere agregar más palabras? (S/N) ").toLowerCase();
            if (continuar === "s") continue;
            else break;
        }

        console.log("Estas son las palabras guardadas: ")
        for(let i=0; i < textos.length; i++) {
            console.log(`${i + 1}. ${textos[i]}`)
        }
    }
    if(tipo === "n") {
        let numeros = [];
        while(true) {
            const numero = parseFloat(prompt("Ingrese un número: "));
            numeros.push(numero);
            const continuar = prompt("¿Quiere agregar más números? (S/N) ").toLowerCase();
            if (continuar === "s") continue;
            else break;
        }

        console.log("Estos son los números guardados: ")
        for(let i=0; i < numeros.length; i++) {
            console.log(`${i + 1}. ${numeros[i]}`)
        }
    }
    if(tipo !== "t" && tipo !== "n") {
        console.log("Opción inválida.")
    }
    
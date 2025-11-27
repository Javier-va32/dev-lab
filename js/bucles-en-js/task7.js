// Refer to Task 7 in your Instructions to complete this task

import promptSync from 'prompt-sync';
const prompt = promptSync();

    let buzzWords = ["Fizz", "Buzz", "Woof", "Bark", "Awoo", "Bang"];
    let numeros = [];


            while(true) {
                const numero = parseInt(prompt("Ingrese un número: "));
                numeros.push(numero);
                const continuar = prompt("¿Quiere agregar más números? (S/N) ").toLowerCase();
                if (continuar === "s") continue;
                else break;
            }

            console.log("Estos son los números guardados: ")
            for(let i=0; i < numeros.length; i++) {
                let num = numeros[i];
                let esPrimo = true;
                if (num<2) {esPrimo = false;}

                for(let j=2; j < num; j++) {
                  if (num % j === 0) {
                    esPrimo = false;
                    break; 
                  }
                }
                if (esPrimo === true) {
                    if (!(num < 2 || num > 10)) {
                      console.log (`${buzzWords[0]}`)
                    }
                    else if (!(num < 9 || num > 20)) {
                      console.log (`${buzzWords[1]}`)
                    }
                    else if (!(num < 19 || num > 30)) {
                      console.log (`${buzzWords[2]}`)
                    }
                    else if (!(num < 29 || num > 40)) {
                      console.log (`${buzzWords[3]}`)
                    }
                    else if (!(num < 39 || num > 50)) {
                      console.log (`${buzzWords[4]}`)
                    }
                    else if (!(num < 49 || num > 106)) {
                      console.log (`${buzzWords[5]}`)
                    }
                }
                else {
                  console.log(`${num}`);
                }
            }

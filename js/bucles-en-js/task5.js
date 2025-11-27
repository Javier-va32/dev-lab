import promptSync from 'prompt-sync';
const prompt = promptSync();

    while(true) {
        let numero = parseInt(prompt("¿Cuántas iteraciones desea realizar? "));

        if (numero <1 || numero >105) {
            console.log("El número debe estar entre 1 y 105");
            continue;
        }
        else {
            for (let i = 1; i < numero + 1; i++) {
                console.log(i)}
            break;
            }
        }

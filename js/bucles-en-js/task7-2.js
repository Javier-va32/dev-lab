import promptSync from 'prompt-sync';
const prompt = promptSync();

    let buzzWords = ["Fizz", "Buzz", "Woof", "Bark", "Awoo", "Bang"];

            for(let i=0; i < 106; i++) {
                let esPrimo = true;
                if (i<2) {esPrimo = false;}

                for(let j=2; j < i; j++) {
                    if (i % j === 0) {
                        esPrimo = false;
                        break; 
                    }
                }
                if (esPrimo === true) {
                    if (!(i < 2 || i > 10)) {
                        console.log (`${i} → ${buzzWords[0]}`)
                    }
                    else if (!(i < 9 || i > 20)) {
                        console.log (`${i} → ${buzzWords[1]}`)
                    }
                    else if (!(i < 19 || i > 30)) {
                        console.log (`${i} → ${buzzWords[2]}`)
                    }
                    else if (!(i < 29 || i > 40)) {
                        console.log (`${i} → ${buzzWords[3]}`)
                    }
                    else if (!(i < 39 || i > 50)) {
                        console.log (`${i} → ${buzzWords[4]}`)
                    }
                    else if (!(i < 49 || i > 106)) {
                        console.log (`${i} → ${buzzWords[5]}`)
                    }
                }
                else {
                    console.log(`${i}`);
                }
            }

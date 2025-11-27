function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;

  // Método que imprime el mail en el formato pedido
  this.printMail = function() {
    console.log(`<Asunto>: ${this.subject}, <mensaje>: ${this.message}`);
  };
}

// Creamos un objeto de prueba
const newMail = new Mail("hello", "world");

// Llamamos al método
newMail.printMail();
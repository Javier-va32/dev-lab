function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

// Usamos los índices 3 y 4 como pide la tarea
const subjectFromUser = process.argv[2];
const messageFromUser = process.argv[3];

const newMail = new Mail(subjectFromUser, messageFromUser);

console.log(newMail.subject + ": " + newMail.message);

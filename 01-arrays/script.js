const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]
console.log(teachers[3]);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();




// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher =teachers.shift() ;


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

console.log(teachers.push('Vanessa'))
console.log(teachers)
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

console.log(teachers.unshift('Sarah'))
console.log(teachers)

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis")


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];
const peopleName = people.map((person) => {
  return person.name
})
console.log(peopleName);


// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
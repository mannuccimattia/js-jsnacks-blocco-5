const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
const formattedNames = names.map(name => `'${name}'`);
console.log(formattedNames.join(", "));

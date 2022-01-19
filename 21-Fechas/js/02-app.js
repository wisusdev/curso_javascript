const hoy = new Date();

// Le indicamos a Moment el idioma
moment.locale('es');

console.log(moment().format('MMMM Do YYYY h:mm:ss')); 
console.log(moment().format('LLLL', hoy));
console.log(moment().add(3, 'days').calendar()); 
// 3A
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mes 5:', meses[4]);
console.log('Mes 11:', meses[10]);

// 3B
let mesesOrdenados = meses.slice().sort(); // Usar slice() para no modificar el array original
console.log('Meses ordenados alfabéticamente:', mesesOrdenados);

// 3C
meses.unshift('Inicio');
meses.push('Fin');
console.log('Array con elementos agregados:', meses);

// 3D
meses.shift();
meses.pop();
console.log('Array con elementos quitados:', meses);

// 3E
let mesesInvertidos = meses.slice().reverse();
console.log('Array invertido:', mesesInvertidos);

// 3F
let mesesUnidos = meses.join(' - ');
console.log('Meses unidos por guión:', mesesUnidos);

// 3G
let mesesMayToNov = meses.slice(4, 11);
console.log('Copia del array desde Mayo hasta Noviembre:', mesesMayToNov);

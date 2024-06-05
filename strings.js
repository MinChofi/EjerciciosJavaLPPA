// 2A
let texto = 'javascript es genial';
let textoMayuscula = texto.toUpperCase();
console.log('Texto en mayúscula:', textoMayuscula);

// 2B
let texto2 = 'programación';
let primeros5 = texto2.substring(0, 5);
console.log('Primeros 5 caracteres:', primeros5);

// 2C
let texto3 = 'desarrollador';
let ultimos3 = texto3.substring(texto3.length - 3);
console.log('Últimos 3 caracteres:', ultimos3);

// 2D
let texto4 = 'javascript es genial';
let primeraLetraMayuscula = texto4.charAt(0).toUpperCase() + texto4.substring(1).toLowerCase();
console.log('Primera letra en mayúscula:', primeraLetraMayuscula);


// 2E
let texto5 = 'Hola mundo';
let posicionEspacio = texto5.indexOf(' ');
console.log('Posición del primer espacio en blanco:', posicionEspacio);

// 2F
let texto6 = 'programación creativa';
let posicionEspacio2 = texto6.indexOf(' ');
let palabra1 = texto6.substring(0, posicionEspacio2);
let palabra2 = texto6.substring(posicionEspacio2 + 1);

let palabra1Formateada = palabra1.charAt(0).toUpperCase() + palabra1.substring(1).toLowerCase();
let palabra2Formateada = palabra2.charAt(0).toUpperCase() + palabra2.substring(1).toLowerCase();
let textoFormateado = palabra1Formateada + ' ' + palabra2Formateada;
console.log('Texto formateado:', textoFormateado);

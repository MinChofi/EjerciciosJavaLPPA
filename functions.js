// 6A
function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 10);
console.log('Resultado de la suma:', resultado);

// 6B
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }
    return a + b;
}

let resultadoValido = suma(5, 10);
console.log('Resultado de la suma válida:', resultadoValido);
let resultadoInvalido = suma(5, 'diez');
console.log('Resultado de la suma inválida:', resultadoInvalido);

// 6C
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log('¿Es 5 un entero?', validateInteger(5)); // true
console.log('¿Es 5.5 un entero?', validateInteger(5.5)); // false

// 6D
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }
    if (!validateInteger(a)) {
        alert('El primer número no es un entero, será redondeado');
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert('El segundo número no es un entero, será redondeado');
        b = Math.round(b);
    }
    return a + b;
}
let resultadoSuma = suma(5.7, 10.3);
console.log('Resultado de la suma con redondeo:', resultadoSuma);

// Función validateInteger (definida previamente)
function validateInteger(num) {
    return Number.isInteger(num);
}

// Función para redondear y validar enteros
function roundAndValidate(num) {
    if (!validateInteger(num)) {
        alert('El número no es un entero, será redondeado');
        return Math.round(num);
    }
    return num;
}

// 6E
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }
    a = roundAndValidate(a);
    b = roundAndValidate(b);
    return a + b;
}
let resultadoFinal = suma(5.7, 10.3);
console.log('Resultado de la suma con validación separada:', resultadoFinal);

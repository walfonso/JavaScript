/*
  1) Variables y Operadores
	a) Crear dos variables numéricas y utilizar el operador suma para guardar
	el valor de la suma de ambos números en una 3er variable.
*/
var n1 = 10;
var n2 = 20;
var result = n1 + n2;
console.log(result);

/*
	1.b) Crear dos variables de tipo String y concatenarlas guardando el resultado
	en una 3er variable.
*/
var cadena1 = "Hola "; 
var cadena2 = "Mundo";
var result = cadena1 + cadena2;
console.log(result);

/*
	1.c) Crear dos variables de tipo String y sumar el largo de cada variable 
	(cantidad de letras del string) guardando el resultado la suma una 3er variable 
	(utilizar length).
*/
var cadena1 = "Hola"; 
var cadena2 = "Mundo";
var result = cadena1.length + cadena2.length;
console.log(result);

/*
	2) Strings
	a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo 
	el texto en mayúscula (utilizar toUpperCase).
*/
var cadena = "Hola mundo!!";
cadena = cadena.toUpperCase();
console.log(cadena);

/*
	2.b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
	string con los primeros 5 caracteres guardando el resultado en una nueva variable 
	(utilizar substring).
*/
var cadena = "programacion";
var result = cadena.substring(0,5);
console.log(result);

/*
	2.c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
	string con los últimos 3 caracteres guardando el resultado en una nueva variable 
	(utilizar substring).
*/
var cadena = "programacion";
var result = cadena.substring(9,12);
console.log(result);

// Mejora: cualquier longitud de cadena muestra lo ultimos 3 caracteres
var cadena = "Estructuras";
var result = cadena.substring(cadena.length-3,cadena.length);
console.log("Aplica Mejora: "+result)

/*
	2.d) Crear una variable de tipo string con al menos 10 caracteres y generar un 
	nuevo string con la primera letra en mayúscula y las demás en minúscula. 
	Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
	toLowerCase y el operador +).
*/
var cadena = "eSTRUCTURAS";
var result = cadena.substring(0,1).toUpperCase() + cadena.substring(1,).toLowerCase();
console.log(result);

/*
	2.e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio 
	en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una 
	variable (utilizar indexOf).
*/
var cadena = "Prog ramas POO";
var result = cadena.indexOf(" ");
console.log("Posición: "+result);

/*
	2.f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres 
	y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para 
	generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y
	las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y 
	el operador +).
*/
var cadena = "pROGRAMACION eSTRUCTURADA";
var posicion = cadena.indexOf(" ");
var palabra1 = cadena.substring(0,1).toUpperCase() + cadena.substring(1,posicion).toLowerCase();
var palabra2 = cadena.substring(posicion, posicion+2).toUpperCase() + cadena.substring(posicion+2,).toLowerCase();
var result = palabra1 + palabra2;
console.log(result);

/*
	3) Arrays
	a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
	"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y
	11 (utilizar console.log)
*/
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] ;
var mes5 = meses[4];
var mes11 = meses[10];
console.log("Mes 5: " + mes5 + " " + "Mes 11: " + mes11);

/*	
	3.b) Ordenar el array de meses alfabéticamente y mostrarlo
	por consola (utilizar sort).
*/
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] ;
meses.sort();
console.log(meses);


/*
	3.c) Agregar un elemento al principio y al final del array 
	(utilizar unshift y push).
*/
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] ;
meses.unshift('PrincipioMes');
meses.push('finalMes');
console.log(meses)

/*	
	3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] ;
meses.shift();
meses.pop();
console.log(meses);

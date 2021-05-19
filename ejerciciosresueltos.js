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




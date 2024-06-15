/*variables
// tiene palabras reservadas como :
// break
// case
// catch
// continue
// default
// let
// delete
// do
// else
// finally
// for
// funcition
// if
// in
// instanceof
// new
// return
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
//y existen algunas mas que habria que googlear*/

let nombre = "karen";
let apellido = "gonzalez";

//alert(nombre);
//alert(apellido);

console.log(nombre);
//console.log(apellido);

const documento = "32222228";

nombre = "axel"; //puedo cambiar el nombre de la variable siempre y cunado la haya inicializado con let
console.log(nombre); //no se puede cambiar el valor con const

let numero = prompt(" por favor ingresa tu edad ");
console.log(numero);

//OPERADOR +
let nombreDeUsuario = prompt("por favor ingresa tu nombre");

alert("hola " + nombreDeUsuario + " como estas?");

let sumamos = prompt("sumamos algo?");
let n1 = Number(prompt("ingresa un numero para sumar"));
let n2 = Number(prompt("ingresa un segundo numero para sumar"));

let total = n1 + n2;
console.log(total);

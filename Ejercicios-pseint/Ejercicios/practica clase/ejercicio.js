let a, b;

a = 20;
b = 30;

console.log(a == b); // false
console.log(a < b); // true
console.log(a > b); // false

let pais, edad;
pais = prompt("De qué país eres?");
edad = prompt("Qué edad tienes?");

if (pais == "Colombia" && edad >= 18) {
    document.writeln("Eres ciudadano del pais :", pais);
} else {
    document.writeln("No eres ciudadanos del pais de Colombia o no eres mayor de edad" );
}

// El operador || (OR) se utiliza para evaluar si al menos una de las condiciones es verdadera. Si alguna de las condiciones es verdadera, el resultado será verdadero. Si todas las condiciones son falsas...

let day, month, year;
day = prompt("Ingrese el día de su nacimiento (1-31):");
month = prompt("Ingrese el mes de su nacimiento (1-12):");
year = prompt("Ingrese el año de su nacimiento (por ejemplo, 2023):");

// Convertir los valores ingresados a números
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);

// Validar si el día, mes y año son válidos
if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.writeln ("ingrese solo numeros")
} else if ( month == 1 || month ==2 || month ==3){
    document.writeln("pertenece al primer trimestre del año")
}else {
    document.writeln("No pertenece al primer trimestre del año")
}
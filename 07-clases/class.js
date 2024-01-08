// Es recomendable nombrar a las clases con UpperCammelCase
class Persona {
    nombre = ''
    apellido = ''
    edad = ''

    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

const pedro = new Persona('Pedro', 'Doe', 35);
console.log(pedro); 

const john = new Persona('John', 'Doe', 25);
console.log(john); 
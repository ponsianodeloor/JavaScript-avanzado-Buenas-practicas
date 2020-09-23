function persona(nombres, apellidos){
 this.nombres = nombres;
 this.apellidos = apellidos;
}

var persona = new persona("Ponsiano", "De Loor");
console.log(persona);
console.log(persona.nombres);
console.log(persona.apellidos);

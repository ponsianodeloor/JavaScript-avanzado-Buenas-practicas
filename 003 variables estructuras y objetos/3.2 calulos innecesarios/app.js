var animales = ["Perro", "Gato", "Leon"] ;
console.log(animales);
//usar una variable para no ejecutar la funcion .length en cada iteracion
var total_animales = animales.length;

for (var i = 0; i < total_animales; i++) {
 console.log(animales[i]);
}

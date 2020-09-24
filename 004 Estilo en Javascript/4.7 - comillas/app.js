var tienda = {
 nombre: "Tienda 6 Skinas",
 calcular: function(costo1, costo2) {
  let resultado = costo1 + costo2;
  return resultado;
 },
 saludar: function() {
  var mensaje = "hola";
  return mensaje;
 }
};

console.log(tienda.nombre);
console.log(tienda.calcular(20, 10));
console.log(tienda.saludar());

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function() {
 console.log(tienda.saludar());
});

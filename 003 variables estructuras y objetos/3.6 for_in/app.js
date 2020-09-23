var persona = {
 nombre: "Tienda 6 Skinas",
 email: "ponsianodeloor@gmail.com",
 twitter: "ponsianodeloor",
 saludar: function(){
  var mensaje = "hola";
  return mensaje;
 }
};

var dato = "";

for (dato in persona) {
 console.log(dato, persona[dato]);
}

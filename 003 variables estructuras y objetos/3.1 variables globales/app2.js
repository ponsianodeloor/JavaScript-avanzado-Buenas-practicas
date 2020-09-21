var mensaje = "Mensaje app2";
resultado += 2;

var datos = {};
datos.mensaje = "mensaje local de app2";
datos.resultado = 120;

function saludar(){
 console.log(mensaje);
 console.log(resultado);
 console.log(datos.mensaje);
 console.log(datos.resultado);
}

saludar();

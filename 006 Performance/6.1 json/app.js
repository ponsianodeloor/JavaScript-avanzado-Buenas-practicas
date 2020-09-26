//
// $.ajaxSetup({
//     scriptCharset: "utf-8",
//     contentType: "application/json; charset=utf-8"
// });
//
// $.getJSON("productos.json", function(productos){
//  console.log(productos);
// });

$.ajax({
    dataType: "json",
    url: "productos.json",
    //url: "http://api.openweathermap.org/data/2.5/weather?id=3117735",
    mimeType: "application/json",
    success: function(result){
     console.log(result);
     //var total_productos = result.length;

     // for (var i = 0; i < total_productos; i++) {
     //  console.log(result[i].nombre);
     // }

//      $.each(result, function(i, obj) {
// //         console.log(i, obj);
//          //$("form").append($('<label for="'+i+'">'+obj.nombre+'</label>'));
//          //$("form").append($('<input id="'+i+'" value="'+obj.value+'" type="text"/><br>'));
//      });
    }
});

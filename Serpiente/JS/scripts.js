/*****************************************************
  Creado por: Raúl Caro Pastorino --> www.fryntiz.es
*****************************************************/

function versionActual() {
	alert("La versión actual de este juego es la v.01 y está en pruebas\n Puedes disfrutar del juego pero puede contener errores que corregiré si me los reportas");
}

/*************************
				 VARIABLES
**************************/
var container = document.getElementById("cajaSerpiente"); //Caja del juego
var points = document.getElementById("cajaPuntuacion"); //Caja Contador de puntos
var Distance = document.getElementById("cajaTiempo"); //Caja Contador de tiempo
var sheriff = document.getElementsByClassName("cuadricula"); //Array con cada cuadro

// Variable que crea un array de cuadros con los que controlar movimientos
var cuadriculas = function() {
	var x = " ";

	for (var i=1; i<=10000; ++i) {
		x = x + "<DIV class=\"cuadricula\" id=\"b" + i + " \" ></DIV>"
	}

	container.innerHTML = x;
	oggy = sheriff[1];
};

cuadriculas();

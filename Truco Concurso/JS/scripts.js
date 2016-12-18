function concursando() {
	// Abrimos una ventana con la página del premio
	open("concurso.html", "concurso", "width=350,height=200,status=0");
}

function esquivarUsuario() {
	// Obtenemos la hora actual
	var ahora = new Date();
	// Calculamos las nuevas coordenadas
	var x = ahora.getMilliseconds();
	var y = x / 2;
	// Desplazamos la ventana
	window.moveTo(x, y);
}

function mostrarMensaje() {
	// Mostra un mensaje al pulsar sobre no
	alert("¡Nos sorprende su respuesta!");
	// Cerrar la ventana actual
	window.close();
}
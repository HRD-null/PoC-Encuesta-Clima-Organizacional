'use strict';

// Escuchamos el envío del formulario
document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío por defecto para procesar la encuesta en JS
  
  // Se crea un objeto para almacenar las respuestas
  let formData = new FormData(this);
  let responses = {};
  
  // Recorrer todas las entradas del formulario
  for (let [key, value] of formData.entries()) {
    responses[key] = value;
  }
  
  // Mostrar en consola las respuestas recogidas
  console.log("Respuestas de la encuesta:", responses);
  
  // Mostrar un mensaje de confirmación al usuario
  alert("¡Gracias por completar la encuesta de Clima y Cultura Organizacional!");
  
  // Aquí podrías enviar los datos a un servidor mediante AJAX si lo deseas.
});

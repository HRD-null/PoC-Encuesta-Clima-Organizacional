'use strict';

// Lista de números de empleado permitidos (ejemplo)
const allowedEmployees = ["1001", "1002", "1003", "2001", "3001"];

document.getElementById("loginBtn").addEventListener("click", function() {
  const employeeNumber = document.getElementById("employeeNumber").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  
  // Verifica que se haya ingresado algún valor
  if (employeeNumber === "") {
    errorMsg.textContent = "Por favor, ingrese su número de empleado.";
    return;
  }
  
  // Comprueba si el número de empleado está en la lista permitida
  if (allowedEmployees.includes(employeeNumber)) {
    // Acceso permitido: redirige a la página de la encuesta (por ejemplo, survey.html)
    window.location.href = "survey.html";
  } else {
    errorMsg.textContent = "Número de empleado incorrecto. Por favor, inténtelo de nuevo.";
    document.getElementById("employeeNumber").value = "";
    document.getElementById("employeeNumber").focus();
  }
});

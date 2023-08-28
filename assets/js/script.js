var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.getElementById('btncorreo').onclick = function(){
  alert('Su correo se ha enviado');
}
document.getElementById('btnfavorito').onclick = function(){
  alert('Se ha añadido exitosamente');
}
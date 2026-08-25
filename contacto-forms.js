document.querySelector('.contact-form').addEventListener('submit', function (e) {
  if (this.querySelector('[name="_honey"]').value) {
    // Campo trampa lleno = probablemente un bot. No lo guardamos.
    e.preventDefault();
    return;
  }
  saveLead({
    tipo: 'contacto',
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    email: document.getElementById('email').value,
    mensaje: document.getElementById('mensaje').value
  });
});

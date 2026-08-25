document.querySelector('.subscribe-form').addEventListener('submit', function (e) {
  if (this.querySelector('[name="_honey"]').value) {
    // Campo trampa lleno = probablemente un bot. No lo guardamos.
    e.preventDefault();
    return;
  }
  saveLead({
    tipo: 'newsletter',
    email: document.getElementById('newsletter-email').value
  });
});

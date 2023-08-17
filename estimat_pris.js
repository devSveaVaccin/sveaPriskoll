document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('[contact-form-7 id="20930" title="Priskollen"]');
  const outputElement = document.querySelector('#estimat_output');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    outputElement.innerHTML = "TEST OK"; // Visa "TEST OK" när knappen klickas på.
  });
});

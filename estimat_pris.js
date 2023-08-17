document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('[contact-form-7 id="20930" title="Priskollen"]');
    const outputElement = document.createElement('div');
    form.appendChild(outputElement);

    const submitButton = form.querySelector('[type="submit"]');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const country = form.querySelector('select[name="country"]').value;
        const duration = form.querySelector('input[name="duration"]:checked').value;
        const stayType = form.querySelector('input[name="stay_type"]:checked').value;

        const estimat = räknaUtEstimat(country, duration, stayType);
        outputElement.innerHTML = estimat;
    });
});

function räknaUtEstimat(country, duration, stayType) {
    // Här kan du implementera din logik för att räkna ut estimatet baserat på användarens val
    // Returnera resultatet som en sträng
    return "Estimerat pris och vaccininformation kommer här.";
}

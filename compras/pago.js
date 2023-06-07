document.addEventListener("DOMContentLoaded", function() {
    var continuarBtn = document.getElementById("continuar-btn-der");
    var webpayRadio = document.getElementById("webpay");

    continuarBtn.addEventListener("click", function(event) {
        if (!webpayRadio.checked) {
            alert("Por favor, selecciona un metodo de pago");
        } else {
            window.location.href = "https://www.webpay.cl";
        }
    });
});

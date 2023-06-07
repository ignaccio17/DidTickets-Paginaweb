const form = document.getElementById('paymentForm');

    // Agregar un controlador de eventos para el envío del formulario
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario

      // Obtener el valor del método de pago seleccionado
      const metodoPago = document.querySelector('input[name="metodo_pago"]:checked');

      if (metodoPago) {
        const metodoPagoSeleccionado = metodoPago.value;
        // Aquí puedes agregar lógica adicional en función del método de pago seleccionado
        alert("Has seleccionado el método de pago: " + metodoPagoSeleccionado);
        // Aquí puedes redirigir al usuario a la página de pago correspondiente
      } else {
        alert("Por favor, selecciona un método de pago");
      }

    window.addEventListener('scroll', function() {
      var derElement = document.getElementById('der-element');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      derElement.style.transform = 'translateY(' + scrollTop + 'px)'; 
    })
  })

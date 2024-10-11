
        document.getElementById('subject').addEventListener('blur', function() {
            validateNotEmpty(this, 'subjectError', 'El asunto no puede estar vacío');
        });

        document.getElementById('cc').addEventListener('blur', function() {
            validateEmail(this, 'emailError', 'Debe ser un correo electrónico válido');
        });
        document.getElementById('sender').addEventListener('blur', function() {
            validateEmail(this, 'senderError', 'Debe ser un correo electrónico válido');
        });

        document.getElementById('message').addEventListener('blur', function() {
            validateNotEmpty(this, 'messageError', 'El cuerpo del mensaje no puede estar vacío');
        });

        function validateNotEmpty(input, mensajeId, message) {
            const errorMensaje = document.getElementById(mensajeId);
            if (input.value.trim() === '') {
               
                errorMensaje.textContent = message;
            } else {
                input.classList.add('success');
                input.classList.remove('error-border');
                errorMensaje.textContent = '';
            }
        }
        function validateEmail(input, mensajeId, message) {
            const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const errorMensaje = document.getElementById(mensajeId);

            if (!email.test(input.value)) {
                input.classList.add('error-border'); // Agrega el borde rojo
                input.classList.remove('success');
                errorMensaje.textContent = message;
            } else {
                input.classList.add('success');
                input.classList.remove('error-border');
                errorMensaje.textContent = '';
            }
        }

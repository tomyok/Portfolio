document.getElementById('submitBtn').addEventListener('click', function(event){
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    let errores = [];

    if(nombre === ''){
        errores.push('El nombre es requerido');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ''){
        errores.push('El email es requerido');
    } else if(!emailRegex.test(email)){
        errores.push('El email no es válido, reingrese.');
    }

    if(mensaje === ''){
        errores.push('El mensaje es requerido');
    }
    const errorMsjDiv = document.getElementById('errorMsj');
    errorMsjDiv.innerHTML = '';

    if(errores.length > 0){
        const ul = document.createElement('ul');
        errores.forEach(function(error){
            const li = document.createElement('li');
            li.textContent = error;
            ul.appendChild(li);
        });
        errorMsjDiv.appendChild(ul);
    } else {
        errorMsjDiv.textContent = 'Formulario enviado exitosamente';
    }

    if(errorMsjDiv.textContent === 'Formulario enviado exitosamente'){
        errorMsjDiv.style.color = 'green';
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    } else {
        errorMsjDiv.style.color = 'red';
    }
});
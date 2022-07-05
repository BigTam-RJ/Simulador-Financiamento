const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');

comCarencia.addEventListener('change',function() {
    if (this.checked) {
        /* remover o atributo oculto */
        listaSuspensa.removeAttribute('hidden');
    }else{
        listaSuspensa.setAttribute('hidden','hidden');
    }
})
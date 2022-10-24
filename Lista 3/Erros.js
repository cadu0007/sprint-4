"use strict";
// Tratamento de Erros 
try {
    fetch('https://viacep.com.br/ws/03050010/json/')
        .then(response => response.json());
}
catch (error) {
    console.log('Vixi, deu ruim em negrão :( ... Salvando erro em logs');
}

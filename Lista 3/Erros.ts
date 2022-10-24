// Tratamento de Erros 

try{

    fetch('https://viacep.com.br/ws/03050010/json/')
    .then(response => response.json())

}catch(error: unknown){

console.log('Vixi, deu ruim em negrão :( ... Salvando erro em logs');

}

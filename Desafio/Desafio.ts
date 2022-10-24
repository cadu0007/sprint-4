//CRUD 
// create
// read    
// update     
// delete


// fetch
class Informacao {
    nome: string;
    data: Date;
    descricao: string;
    status: boolean;
    id: number;

    constructor(_nome: string, _descricao: string, _data: Date, _status: boolean, _id: number) {
        this.nome = _nome
        this.data = _data
        this.descricao = _descricao
        this.status = _status
        this.id = _id

    }
}

let guardarinformacao: Array<Informacao> = []

fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes',
    {
        method: 'GET',
        headers: { 'Content-Type': "aplication/json" }
    })

    .then(response => response.json())
    .then(api => {
        for (let index = 0; index < api.length; index++) {
            let informacao: Informacao = new Informacao(api[index].nome, api[index].descricao, api[index].data, api[index].id, api[index].status)
            guardarinformacao.push(informacao)
        }
        console.log(guardarinformacao);

        lista()
    })

// Listar 
let div = document.querySelector(".lista_pacote")!;
const lista = () => {
    div.innerHTML = "";
    for (let index = 0; index < guardarinformacao.length; index++) {
        div.innerHTML += `
        <div class="pacotex">
        <h3>${guardarinformacao[index].nome}</h3><br>
        <p>${guardarinformacao[index].descricao}</p><br>
        <p>
            <span>${guardarinformacao[index].data}</span>
        </p>
        <br><br>

        <div class="botoes">
            <div class="editar">
                <button onclick =  'Editar("${guardarinformacao[index].nome}","${guardarinformacao[index].descricao}","${guardarinformacao[index].data}","${guardarinformacao[index].status}")' class="botao_editar">Editar</button>
            </div>

          <br>

            <div class="excluir">
                <button onclick = "Excluir(${index})" class="botao_excluir">Excluir</button>
                
                </div></div>`


    }
}

// Cadastrar
let input_data_da_viagem = document.querySelector(".data") as HTMLInputElement;
let input_pacote = document.querySelector("#numero") as HTMLInputElement;
let input_descricao = document.querySelector("#ds") as HTMLInputElement;
const Cadastrar = () => {
    let data: string = input_data_da_viagem.value
    let nome: string = input_pacote.value
    let descricao: string = input_descricao.value
    let guardar: Informacao = new Informacao(nome, descricao, new Date(data), true, guardarinformacao.length + 1)

    guardarinformacao.push(guardar)
    lista()
}

// Excluir
const Excluir = (index: number) => {
     guardarinformacao.splice(index, 1)     
     lista() }

   
 // Editar
 let botao_cadastro: any = document.querySelector("#bt")
 let id: number;
 const Editar = (editar_nome:string, editar_data:string, editar_discricao:string, editar_status:string, editar_id:string) => {
    input_pacote.value = editar_nome;
    input_descricao.value = editar_discricao;
    input_data_da_viagem.value = editar_data;
    id = parseInt (editar_id);

    botao_cadastro.innerHTML = ` <button onclick = "Editar2()" class="botao_editar">Editar</button> `
 }

 const Editar2 = () => {
    let editado = new Informacao (input_pacote.value, input_descricao.value, new Date (input_data_da_viagem.value), false, id)
    guardarinformacao.splice(id-1,1,editado)
    lista()
    botao_cadastro.innerHTML = `<button id="bt" onclick="Cadastrar()">Cadastrar</button>`
 }
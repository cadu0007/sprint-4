"use strict";
class cartoes {
    constructor(_titular, _numero, _ativo, _cvv) {
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.cvv = _cvv;
    }
    // Métodos - funções - Ações 
    Cancelar() {
        this.ativo = false;
        console.log("cartão cancelado");
    }
}
// Instâncio - criação do objetos 
// let cartao = new Cartao();
// cartao.titular = "Carlos";
// cartao.Cancelar();
// console.log(cartao.titular);
let cartao1 = new cartoes('filipe', 88899977711, true, 321);

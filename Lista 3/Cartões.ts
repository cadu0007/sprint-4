class cartoes{

    // Atributos - característicos
    // titular: string = "Carlos";
    // numero: number = 99988877722;
    // ativo: boolean = true;
    // cvv: number = 723;

    titular: string;
    numero: number;
    ativo: boolean;
    cvv: number;

    constructor(_titular:string, _numero:number, _ativo:boolean, _cvv:number){
        this.titular =_titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.cvv = _cvv;
    }

    // Métodos - funções - Ações 
    Cancelar():void{
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


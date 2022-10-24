// Construtor -> É o que a classe recebe quando eu instancio ela
// Definição
class Usuario {
    // Parametros
    email:string
    senha:string
    admin:boolean = false

    constructor(_email:string, _senha:string)
    {
        this.email = _email
        this.senha = _senha
    }

    isAdmin = () => {
        if(this.admin == false)
        {
            console.log("Não é Administrador!");

        }
        else {
            console.log("É Administrador!");
        }
    }

}

// Admin é filho de Usuário
class Admin extends Usuario {

    constructor(_email:string, _senha:string)
    {
        super(_email, _senha)
        // true = verdadeiro, false = falso
        this.admin = true;
    }
}

let Vinicio:Usuario = new Usuario("vinicio@email.com", "123")
let Gabrielly:Admin = new Admin("gabi@email.com", "123")

Gabrielly.isAdmin()
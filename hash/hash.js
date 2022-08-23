import { createHash } from 'crypto'

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash('Uma senha'))

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash == criaHash(senha)){
            console.log('Usuário autenticado com sucesso')
            return true;
        } 

        console.log('Usuário ou Senha incorreta')
        return false;
    }
}


const usuario = new Usuario('Jean Everton', 'senhateste')

console.log(usuario);

//sucesso
usuario.autentica('Jean Everton', 'senhateste')
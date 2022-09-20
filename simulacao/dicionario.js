import {createHash} from 'crypto'


class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash == this.criaHash(senha)) {
            console.log('Usuário autenticado com sucesso')
            return true;
        }

        //console.log('Usuário ou Senha incorreta')
        return false;
    }
}


const usuario = new Usuario('Jean Everton', 'senha123456')

const senhasComuns = ["senha123456789", "senha123", "senha123456", "admin", "teste123"
    , "teste123456"];

senhasComuns.map(senha => {
    if(usuario.autentica('Jean Everton', senha)){
        console.log(`A senha do usuário é ${senha}`)
    }
})

//console.log(usuario);
//sucesso
//usuario.autentica('Jean Everton', 'senhateste')
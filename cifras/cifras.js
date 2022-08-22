const mensagemSecreta = "minhamensecreta"

console.log(mensagemSecreta)

function cifraMensagem(mensagem, mov) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere + mov)
    })

    return mensagemCifrada.join('')
}
const mensagemCifrada = cifraMensagem(mensagemSecreta, 3)

console.log(mensagemCifrada)

function decifraMensagem(mensagem, mov) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere - mov)
    })

    return mensagemCifrada.join('')
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3)

console.log(mensagemDecifrada)

const senhaSecreta = "alura";

function cifrarMensagem (mensagem, movimentos){
 const mensagemCifrada = mensagem.split('').map((caractere) => {
 const codigoCaractere = caractere.charCodeAt(0);
 return String.fromCharCode(codigoCaractere + movimentos)
})
 return mensagemCifrada.join("")
}

const mensagemsCifrada = cifrarMensagem(senhaSecreta, 4);

console.log(mensagemsCifrada)
import {createHash} from 'crypto'

function criarHash(dado, estrategia) {
    return createHash(estrategia).update(dado).digest('hex');
}

const senhasComuns = ["senha123456789", "senha123", "senha123456", "admin", "teste123"
    , "teste123456", "brasil", "1234"];

const raindowTables = senhasComuns.map( senha => {
    return [ senha, criarHash(senha, "MD5")]
})

console.log(raindowTables)

const hashesVazadas = ["21232f297a57a5a743894a0e4a801fc3",
    "cedf5ab7b5c5852b3ed35d7dbe3c3835",
    "81dc9bdb52d04dc20036dbd8313ed055"]

hashesVazadas.map( hashesVazada => {
    raindowTables.map( parGerado => {
        if (hashesVazada === parGerado[1]){
            console.log(`Senha encontrada: a hash ${hashesVazada} equivalente a ${parGerado[0]}`)
        }
    })
})
import jwt from "jsonwebtoken"

const chaveSecreta = "chaveSuperSecreta"

const token = jwt.sign(
    {
        apelido: "js",
        curso: "segunrando e node js"
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.table(tokenDecodificado)
const input = document.getElementById("dialogo")
const caixaDialogo = document.getElementById('conversation')
const conversa = document.getElementById('conversa')
const btn = document.getElementById('btn')
// console.log(input)
// function enviaMsg(){
//     console.log(input)
//     const p = document.createElement('p')
//     p.innerHTML = input
//     caixaDialogo.appendChild(p) 
// }

const possibilidades = ["olá", "ola", "oi", "boatarde", "boa Tarde", "Boa Tarde"]
const canais = ["digite 1 para abertura de chamados", "digite 2 para receber catálogo"]
const resposta = []

function boot(valor) {
    let resp = possibilidades.find(eleme => eleme == valor)
    if (resp == valor) {
        canais.map((ele) => {
            const p = document.createElement('p')
            p.className = "pResp"
            p.innerHTML = ele
            caixaDialogo.appendChild(p)
        })
    }
}

btn.addEventListener('click', () => {

    const p = document.createElement('p')
    p.className = "pDialog"
    p.innerHTML = input.value
    caixaDialogo.appendChild(p)
    resposta.push(input.value)
    input.value = ""
    console.log(resposta[0])
    boot(resposta[0])
})





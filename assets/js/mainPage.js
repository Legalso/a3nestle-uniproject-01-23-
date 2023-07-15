let textIMC = document.querySelector("#imc-numero")
let metaAgua = document.querySelector("#meta-agua")

let peso = localStorage.getItem('peso')
let imc = localStorage.getItem('imc')

if(imc == null){
    metaAgua.innerHTML = "0 ml"
    textIMC.innerHTML = "0"
}else{
    metaAgua.innerHTML = 35 * parseInt(peso) + "ml"
    textIMC.innerHTML = imc
}
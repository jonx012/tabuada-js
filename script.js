function gerar() {
    var numEscolhido = document.querySelector("#numEscolhido")
    var nNumEscolhido = Number(numEscolhido.value)
    var tbd = document.querySelector("#tbd")

    if (numEscolhido.value.length == 0) {
        alert("Por favor, insira um número!")
    } else {
        var i = 1
        tbd.innerHTML = " "
        while (i <= 10) {
            var res = nNumEscolhido * i
            var item = document.createElement("option")
            item.text = `${nNumEscolhido} x ${i} = ${res}`
            item.value = `tab${c}`
            tbd.appendChild(item)
            
            i++
        }
    }
}
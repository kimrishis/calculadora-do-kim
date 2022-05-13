var inputs = document.querySelectorAll("input")
var inp1 = inputs[0]
var inp2 = inputs[1]
var buttons = document.querySelectorAll("button")


buttons[0].addEventListener("click", function(){
    var soma = parseFloat(inp1.value) + parseFloat(inp2.value)
    window.alert("resultado :> "+soma)
})

buttons[1].addEventListener("click", function(){
    var subtracao = parseFloat(inp1.value) - parseFloat(inp2.value)
    window.alert("resultado :> "+subtracao)
})

buttons[2].addEventListener("click", function(){
    var multiplicacao = parseFloat(inp1.value) * parseFloat(inp2.value)
    window.alert("resultado :> "+multiplicacao)
})

buttons[3].addEventListener("click", function(){
    var divisao = parseFloat(inp1.value) / parseFloat(inp2.value)
    window.alert("resultado :> "+divisao)
})
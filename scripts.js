var inputs = document.querySelectorAll("input")
var inp1 = inputs[0]
var inp2 = inputs[1]
var button = document.querySelector("button")

button.addEventListener("click", function(){
    var soma = parseFloat(inp1.value) + parseFloat(inp2.value)
    window.alert("resultado :> "+soma)
})


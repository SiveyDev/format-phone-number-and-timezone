console.log("Formatter Online");
var inputText = document.getElementById('txt');
var format = document.getElementById('format');
var p = document.getElementById('result');
var textValue = '';
format.addEventListener("click", function(){
    textValue = inputText.value;
    p.textContent = textValue;
    console.log(inputText.value);
})
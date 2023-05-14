console.log("Formatter Online");
let inputText = document.getElementById('txt');
let format = document.getElementById('format');
let p = document.getElementById('result');
let textValue = '';
format.addEventListener("click", function(){
    textValue = inputText.value;
    let timeHour = textValue[1] + textValue[2];
    let timeMinute = textValue[4] + textValue[5];
    //p.textContent = textValue;
    //console.log(inputText.value);
    p.textContent = `(${timeHour}:${timeMinute} EST >>> ${timeHour - 2}:${timeMinute} MST)`;
    console.log(timeHour);
})
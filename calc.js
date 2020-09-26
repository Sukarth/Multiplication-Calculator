var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField')
var form = document.getElementById('XTimesY');



form.addEventListener('submit', function(event) {

    if (!numField1.value || !numField2.value ) {
        console.error("Please enter values in the field")
        alert("Please enter values in the field")        
    } else {
    var a = parseFloat(numField1.value);
    var b = parseFloat(numField2.value);

    var percent =  a * b;

    resultField.innerText = "Answer: " + percent;
    // setTimeout(() => { alert("Answer: " + percent); }, 50);    
    event.preventDefault();

    }
});
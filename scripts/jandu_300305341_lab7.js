function add(){
    var operand1 = document.getElementById("operand-1").value;
    var operand2 = document.getElementById("operand-2").value;
    var textarea = document.getElementById("textarea");

    var add =  parseInt(operand1) + parseInt(operand2);
    textarea.value = operand1 + " + " + operand2 + " = " + add;
}

function multiply(){
    var operand1 = document.getElementById("operand-1").value;
    var operand2 = document.getElementById("operand-2").value;
    var textarea = document.getElementById("textarea");

    var multiply =  parseInt(operand1) * parseInt(operand2);
    textarea.value = operand1 + " * " + operand2 + " = " + multiply;
}

function division(){
    var operand1 = document.getElementById("operand-1").value;
    var operand2 = document.getElementById("operand-2").value;
    var textarea = document.getElementById("textarea");

    var division =  parseInt(operand1) / parseInt(operand2);
    textarea.value = operand1 + " / " + operand2 + " = " + division;
}

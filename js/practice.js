function getNumber(numbers) {
    let number = document.getElementById("enter");
    switch (numbers) {
        case 1:
            number.value += "1";
            break;
        case 2:
            number.value += "2";
            break;
        case 3:
            number.value += "3";
            break;
        case 4:
            number.value += "4";
            break;
        case 5:
            number.value += "5";
            break;
        case 1:
            number.value += "1";
            break;
        case 6:
            number.value += "6";
            break;
        case 7:
            number.value += "7";
            break;
        case 8:
            number.value += "8";
            break;
        case 9:
            number.value += "9";
            break;
        case 0:
            number.value += "0";
            break;
    }
}

function clearScreen() {
    document.getElementById("enter").value = "";
    document.getElementById("result").value = "";
}

function myOperator(operator) {
    let operate = document.getElementById("enter");
    switch (operator) {
        case '+':
            operate.value += '+';
            break;
        case '-':
            operate.value += '-';
            break;
        case '*':
            operate.value += '*';
            break;
        case '/':
            operate.value += '/';
            break;
    }

}

function simelar() {
    let results = document.querySelector("#enter");
    let total = Math.abs(eval(results.value));
    document.querySelector("#result").value = total;
}

function space() {
    let results = document.querySelector("#enter");
    let x = results.value;
    if(x.length > 0){
        x = x.substring(0, x.length-1);
        results.value = x;
    }
}
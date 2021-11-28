let value1 = '';
let value2 = 0;
function getValue(num) {
    let x = document.getElementById("screen");
    if (num === '+') {
        x.innerHTML = '';
        value2 = AddNums(Number(value1), value2);
        value1 = '';
    }
    else if (num === '=') {
        x.innerHTML = String(AddNums(Number(value1), value2));
    }
    else {
    value1 = value1 + String(num);
    console.log(value1);
    let y = document.createTextNode(num);
    x.appendChild(y);
    }
    
}

function AddNums(value1, value2) {
    value2 = value1 + value2;
    console.log(value2);
    return value2;
    
    
}




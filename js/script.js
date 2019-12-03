function checkNum(number) {

    let regex = new RegExp('^[0-9]+$');

    if(number.match(regex)) 
    {
        return true; 
    }
    else 
    {
        return false;
    }
}

function isEmpty(data) {

    if(data.length == 0) {

        return true;
    }
    else {

        return false;
    }
}

function devideFive(startNum, endNum) {

    let numbers = [];
    let counter = 0;


    for (let i = startNum; i <= endNum; i++) {

        if (i % 5 == 0) {
            numbers[counter] = i;
            counter++;   
        }
    }

    return numbers;
}



let startNum = prompt("Enter start value:");

while(isEmpty(startNum)) {
    alert("Sorry, no numbers");
    startNum = prompt("Enter start value:");
}

while(!(checkNum(startNum))) {
    startNum = prompt("Enter start value:");
}

let endNum = prompt("Enter end value:");

while(isEmpty(endNum)) {
    alert("Sorry, no numbers");
    endNum = prompt("Enter end value:");
}

while(!(checkNum(endNum))) {
    endNum = prompt("Enter end value:");
}

// console.log(devideFive(parseInt(startNum), parseInt(endNum)));

let arr = devideFive(Number(startNum), Number(endNum));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


function solve(args) {
    var i,
        currentLine = '',
        currentRow = 0,
        currentNumber = currentRow + 1,
        inputNumber = +args,
        numberCounter = 0,
        len = inputNumber * inputNumber;

    for (i = 0; i < len; i += 1){
        if (numberCounter < inputNumber) {
            currentLine += currentNumber + ' ';
            currentNumber += 1;
            numberCounter += 1;
        } 
         if (numberCounter === inputNumber) {
            console.log(currentLine);
            currentLine = '';
            currentRow += 1;
            currentNumber = currentRow + 1;
            numberCounter = 0;
        }
    }
}

solve(2);
solve(3);
solve(4);
function solve(args) {
    var i,
        hexBit,
        decResult = 0,
        hexNumber = String(args),
        len = hexNumber.length,
        hexBase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    for (i = 0; i < len ; i += 1){
        hexBit = hexNumber[i];
        decResult = hexBase.indexOf(hexBit) + decResult * 16;
    }

    console.log(decResult);
}

solve("FE");
solve('1AE3');
solve('4ED528CBB4');
function solve(args) { 
    var i,
        number,
        text,
        numbers = args,
        len = numbers.length;
   
    for (i = 0; i < len; i++) {
        number = numbers[i] | 0;
    
        if (number % 7 === 0 && number % 5 === 0) {
            console.log('true ' + number);
        } else {
            console.log('false ' + number);
        }
    }   
}

solve([3, 0, 5, 7, 35, 140]);

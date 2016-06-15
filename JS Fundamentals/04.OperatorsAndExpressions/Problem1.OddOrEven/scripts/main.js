function solve(args) { 
    var numbers = args,
        number,
        i,
        len = numbers.length;
        
    for (i = 0; i < len; i++) {
        number = numbers[i] | 0;
      
        if (number % 2 === 0) {
            console.log("even " + number);
        } else {
            console.log("odd " + number);
        }
        
    }
}

solve(["3", 2,-2, -1, 0]);
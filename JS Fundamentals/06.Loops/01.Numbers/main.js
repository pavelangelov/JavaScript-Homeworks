function solve(args) {
    var i,
        output = '',
        inputNumber = +args[0];

    for (i = 1; i <= inputNumber; i += 1) {
        output += i + ' ';
    }

    console.log(output);
}

solve([5]);
solve([1]);
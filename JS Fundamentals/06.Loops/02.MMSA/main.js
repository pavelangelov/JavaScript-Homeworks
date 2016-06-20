function solve(args) {
    var i,
        len,
        number,
        average,
        numbers = args,
        min = +args[0],
        max = +args[0],
        sum = +args[0];

    for (i = 1, len = numbers.length; i < len; i += 1){
        number = +numbers[i];
        sum += number;
        if (min > number) {
            min = number;
        }

        if (max < number) {
            max = number;
        }
    }
    average = sum / len;
    console.log('min='+ min.toFixed(2) +  '\nmax=' + max.toFixed(2) + '\nsum=' + sum.toFixed(2) + '\navg='+ average.toFixed(2));
}

solve([2, 5, 1]);
solve([2, -1, 4]);
function solve(args) {
    var digit,
        number = args[0] | 0;

    digit = ((number / 100) % 10) | 0;
    if (digit === 7) {
        console.log('true');
    } else {
        console.log('false ' + digit);
    }
}

solve([5]);
solve([701]);
solve([9703]);
solve([877]);
solve([777877]);
solve([9999799]);


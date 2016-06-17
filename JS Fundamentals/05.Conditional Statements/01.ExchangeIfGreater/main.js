function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]);

    if (a > b) {
        var valueHolder = a;
        a = b;
        b = valueHolder;
    }

    console.log(a + ' ' + b);
}

solve([5, 2]);
solve([3, 4]);
solve(["5.5", 4.5]);
function solve(args) {
    var number = +args[0];

    if (number <= 0 || !PrimeCheck(number)) {
        console.log('false');
    } else {
        console.log('true');
    }

    function PrimeCheck(n) {
        var i,
            sqrt = Math.sqrt(n);

        for (i = 2; i <= sqrt; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }
}

solve([2]);
solve(['23']);
solve([-3]);
solve([0]);
solve([1]);
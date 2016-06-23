function solve(args) {
    var i,
        j,
        number = +String(args);

    for (i = number; i >= 0; i -= 1){
        if (isPrime(i)) {
            console.log(i);
            break;
        }
    }

    function isPrime(n) {
        if (n <= 1) {
            return false;
        } else if (n <= 3) {
            return true;
        } else if (n % 2 === 0 || n % 3 === 0) {
            return false;
        }
        var i = 5;
        while (i * i <= n) {
            if (n % i === 0 || n % (i + 2) === 0) {
                return false;
            }

            i += 6;
        }

        return true;
    }
}

solve(13);
solve(126);
solve(26);
solve(10000000);
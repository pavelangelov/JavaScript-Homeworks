function solve(args) {
    var params = String(args).split('\n'),
        arrLen = +params[0],
        numbers = params[1].split(' ')
                            .map(function (number) {
                                return +number;
                            });
                            
    var sortArr = function() {
        var i,
            j,
            len,
            min,
            numberHolder;

        for (i = 0, len = numbers.length; i < len - 1; i += 1) {
            iMin = i;
            for (j = i + 1; j < len; j += 1) {
                if (+numbers[j] < +numbers[iMin]) {
                    iMin = j;
                }
            }

            if (iMin !== i) {
                numberHolder = numbers[i];
                numbers[i] = numbers[iMin];
                numbers[iMin] = numberHolder;
            }
        }
    }();   

    console.log(numbers.join(' '));
}

solve('6\n3 4 1 5 2 6');
solve('10\n36 10 1 34 28 38 31 27 30 20');
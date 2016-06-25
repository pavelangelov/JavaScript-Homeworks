function solve(args) {
    var index,
        params = String(args).split('\n'),
        len = +params[0],
        numbers = params[1].split(' ')
                            .map(function (number) {
                                return +number;
                              });

        function findFirstLargerThanNeighbours(numbersArr) {
            var previousNumber,
                currentNumber,
                nextNumber,
                i,
                len;
            
            for (i = 1, len = numbersArr.length; i < len - 1; i += 1){
                previousNumber = numbersArr[i - 1];
                currentNumber = numbersArr[i];
                nextNumber = numbersArr[i + 1];

                if (previousNumber < currentNumber && currentNumber > nextNumber) {
                    return i;
                }
            }

            return -1;
        }

        index = findFirstLargerThanNeighbours(numbers);
        console.log(index);
}

solve('6\n-26 -25 -28 31 2 27');
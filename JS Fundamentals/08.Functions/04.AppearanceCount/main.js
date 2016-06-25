function solve(args) {
    var params = String(args).split('\n'),
        len = +params[0],
        numbers = params[1].split(' ')
                        .map(function (number) {
                            return +number;
                          }),
        searchedNumber = +params[2];

    function countAppears(numbersArr, searchedNum) {
        var number,
            appears = 0;
        for(number of numbers) {
            if (number == searchedNum) {
                appears += 1;
            }
        }

        return appears;
    }

    console.log(countAppears(numbers, searchedNumber));
}

solve('8\n' + '28 6 21 6 -7856 73 73 -56' + '\n73');
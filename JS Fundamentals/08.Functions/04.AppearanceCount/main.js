function solve(args) {
    var len = +args[0],
        numbers = args[1].split(' ')
                        .map(function (number) {
                            return +number;
                          }),
        searchedNumber = +args[2];

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

solve(['8', '28 6 21 6 -7856 73 73 -56', '73']);
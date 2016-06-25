function solve(args) {
    var maxNumber,
        numbersArr = String(args)
                            .split(' ')
                            .map(function (number) {
                                return +number;
                              });

    function GetMax(firstNumber, secondNumber) {
        return firstNumber > secondNumber ? firstNumber : secondNumber;
    }

    maxNumber = GetMax(GetMax(numbersArr[0], numbersArr[1]), numbersArr[2]);

    console.log(maxNumber);
}

solve('8 3 6');
solve('7 19 19');
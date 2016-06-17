function solve(args) {
    var sign,
        firstNum = parseFloat(args[0]),
        secondNum = parseFloat([args[1]]),
        thirdNum = parseFloat([args[2]]),
        allAreZeroes = firstNum === 0 || secondNum === 0 || thirdNum ===0,
        allArePositive = firstNum > 0 && secondNum > 0 && thirdNum > 0,
        oneIsPositive = (firstNum > 0 && (secondNum < 0 && thirdNum < 0)) || (secondNum > 0 && (firstNum < 0 && thirdNum < 0)) || 
                        (thirdNum > 0 && (firstNum < 0 && secondNum < 0));

    if (allAreZeroes) {
        sign = '0';
    } else if (allArePositive || oneIsPositive) {
        sign = '+';
    } else {
        sign = '-';
    }

    console.log(sign);
}

solve([5, 2, 2]);
solve([-2, -2, 1]);
solve([-2, 4, 3]);
solve([0, -2.5, 4]);
solve([-1, -0.5, -5.1]);
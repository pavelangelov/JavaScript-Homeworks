function solve(args) {
    var maxNum = parseFloat([args[0]]),
        secondNum = parseFloat(args[1]),
        thirdNum = parseFloat(args[2]);

    if (maxNum < secondNum) {
        maxNum = secondNum;
    }
    if (maxNum < thirdNum) {
        maxNum = thirdNum;
    }

    console.log(maxNum);
}

solve([5, 2, 2]);
solve([-2, -2, 1]);
solve([-2, 4, 3]);
solve([0, -2.5, 5]);
solve([-0.1, -0.5, -1.1]);
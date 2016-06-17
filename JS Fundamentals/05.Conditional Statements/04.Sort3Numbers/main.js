function solve(args) {
    var firstNum = parseFloat(args[0]),
        secondNum = parseFloat(args[1]),
        thirdNum = parseFloat(args[2]),
        min = firstNum,
        middle = firstNum,
        max = firstNum;
    
    if (min > secondNum) {
        if (secondNum > thirdNum) {
            min = thirdNum;
        } else {
            min = secondNum;
        }
    } else if (min > thirdNum) {
        min = thirdNum;
    }

    if (max < secondNum) {
        if (secondNum < thirdNum) {
            max = thirdNum;
        } else {
            max = secondNum;
        }
    } else if (max < thirdNum) {
        max = thirdNum;
    }

    if (middle === min || middle == max) {
        if (secondNum === min || secondNum === max) {
            middle = thirdNum;
        } else {
            middle = secondNum;
        }
    }

    console.log(max + ' ' + middle + ' ' + min);
}

solve([5, 2, 2]);
solve([-2, -2, 1]);
solve([-2, 4, 3]);
solve([0, -2.5, 5]);
solve([-0.1, -0.5, -1.1]);
solve([10, 20, 30]);
solve([1, 1, 1]);
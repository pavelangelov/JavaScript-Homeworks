function solve(args) {
    var currentNum,
        max = parseFloat(args[0]);

    for (var i = 1; i < 5; i += 1){
        currentNum = parseFloat(args[i]);
        if (currentNum > max) {
            max = currentNum;
        }
    }

    console.log(max);
}

solve([5, 2, 2, 4, 1]);
solve([-2, -22, 1, 0, 0]);
solve([-2, 4, 3, 2, 0]);
solve([0, -2.5, 0 ,5 ,5]);
solve([-3, -0.5, -1.1, -2, -0.1]);
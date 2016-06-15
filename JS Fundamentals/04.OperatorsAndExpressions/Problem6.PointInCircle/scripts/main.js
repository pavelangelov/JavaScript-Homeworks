function solve(args) {
    var x = 0,
        y = 0,
        pointX = parseFloat(args[0]),
        pointY = parseFloat(args[1]),
        r = 2;

    var isInCircle;
    var a = Math.sqrt((pointX - x) * (pointX - x) + (pointY - y) * (pointY - y));

    isInCircle = a <= r ;
    if (isInCircle) {
        console.log('yes ' + a.toFixed(2));
    } else {
        console.log('no ' + a.toFixed(2));
    }

}

solve([-2, 0]);
solve([-1, 2]);
solve([1.5, -1]);
solve([-1.5, -1.5]);
solve([100, -30]);
solve([0, 0]);
solve([0.2, -0.8]);
solve([0.9, -1.93]);
solve([1, 1.655]);
solve([0, 1]);

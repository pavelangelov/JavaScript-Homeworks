function solve(args) {
    var result,
        isInCircle,
        isInRect,
        circleX = 1,
        circleY = 1,
        r = 1.5,
        pointX = parseFloat(args[0]),
        pointY = parseFloat(args[1]);

    isInCircle = Math.sqrt((pointX - circleX) * (pointX - circleX) + (pointY - circleY) * (pointY - circleY)) <= r;
    isInRect = (pointX >= - 1 && pointX <= 5) && (pointY <= 1 && pointY >= -1);

    result = isInCircle ? 'inside circle ' : 'outside circle ';
    result += isInRect ? 'inside rectangle' : 'outside rectangle';

    console.log(result);
}

solve([2.5, 2]);
solve([0, 1]);
solve([2.5, 1]);
solve([1, 2]);
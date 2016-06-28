function solve(args) {
    var i,
        len,
        currentLine,
        linesLengths = [],
        points = args.map(Number);
    
    for (i = 0; i < points.length; i += 1){
        currentLine = points.splice(0, 4);
        linesLengths.push(getLineLength(currentLine));
    }

    linesLengths.push(canHaveTriangle(linesLengths));
    for (i = 0; i < linesLengths.length; i += 1){
        console.log(linesLengths[i]);
    }

    function canHaveTriangle(linesArr){
        var line = linesArr.map(Number),
            max = Math.max((line[0], line[1]), line[2]),
            isPossible = (line[0] + line[1] + line[2]) - max > max;

        if (isPossible) {
            return 'Triangle can be built';
        } else {
            return 'Triangle can not be built';
        }
    }

    function getLineLength(pointsArr){
        var xDistance = (pointsArr[2] - pointsArr[0]) * (pointsArr[2] - pointsArr[0]),
            yDistance = (pointsArr[3] - pointsArr[1]) * (pointsArr[3] - pointsArr[1]),
            d = Math.sqrt(xDistance + yDistance);

            return d.toFixed(2);
    }
}

solve([
  '5', '6', '7', '8',
  '1', '2', '3', '4',
  '9', '10', '11', '12'
]);
solve([
  '7', '7', '2', '2',
  '5', '6', '2', '2',
  '95', '-14.5', '0', '-0.123'
]);
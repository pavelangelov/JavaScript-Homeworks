function solve(args) {
    var i,
        currentNumber,
        mostFreqNum,
        mostRepeats,
        numbers = String(args).split('\n'),
        len = +(numbers.shift()),
        repeats = [];

    for (i = 0; i < len; i += 1) {
        currentNumber = +numbers[i];
        if (repeats[currentNumber]) {
            repeats[currentNumber] += 1;
        } else {
            repeats[currentNumber] =  1;
        }

    }

    mostRepeats = repeats.reduce(function(a, b) {
            return Math.max(a, b);
        });
    mostFreqNum = repeats.indexOf(mostRepeats);
    console.log(mostFreqNum + ' (' + mostRepeats + ' times)');
}

solve('13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3');
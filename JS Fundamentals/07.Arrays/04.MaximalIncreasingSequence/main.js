function solve(args) {
    var i,
        numbers = String(args).split('\n'),
        len = +numbers[0],
        maxSequence = 1,
        currentSequence = 1;
    
    for (i = 2; i < len; i += 1){
        if (+numbers[i - 1] < +numbers[i]) {
            currentSequence += 1;
            if (maxSequence < currentSequence) {
                maxSequence = currentSequence;
            }
        } else {
            currentSequence = 1;
        }
    }

    console.log(maxSequence);
}

solve('8\n7\n3\n2\n3\n4\n2\n2\n4');
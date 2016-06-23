function solve(args) {
    var i,
        numbers = String(args).split('\n'),
        len = +numbers[0],
        maxSequence = 1,
        currentSequence = 1;
    
    for (i = 2; i <= len; i += 1){
        if (+numbers[i - 1] === +numbers[i]) {
            currentSequence += 1;
            if (currentSequence > maxSequence) {
                maxSequence = currentSequence;
            }
        } else {
            currentSequence = 1;
        }
    }
    
    console.log(maxSequence);
}

solve('10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1');
function solve(args) {
    var i,
        j,
        min,
        numberHolder,
        numbers = String(args).split('\n'),
        len = +(numbers.shift());
    
    for (i = 0; i < len - 1; i += 1){
        iMin = i;
        for (j = i + 1; j < len; j += 1){
            if (+numbers[j] < +numbers[iMin]) {
                iMin = j;
            }
        }

        if (iMin !== i) {
            numberHolder = numbers[i];
            numbers[i] = numbers[iMin];
            numbers[iMin] = numberHolder;
        }
    }
    console.log(numbers.join('\n'));
}

solve('6\n3\n4\n1\n5\n2\n6');
solve('10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20');
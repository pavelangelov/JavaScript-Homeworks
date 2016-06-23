function solve(args) {
    var i,
        numbers = String(args).split('\n'),
        len = +(numbers.shift()),
        index = (len / 2) | 0,
        searchedNum = +(numbers.pop()),
        founded = false;
    
    while (len !== 0 && !founded) {
        if (searchedNum > +numbers[index]) {
            len = (len / 2) | 0;
            index += ((len / 2) | 0);
        } else if (searchedNum < +numbers[index]) {
            len = (len / 2) | 0;
            index -= ((len / 2) | 0);
        } else {
            founded = true;
        }
    }

    console.log(founded ? index : -1);
}

solve('10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32');
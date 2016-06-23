function solve(args) {
    var i,
        len,
        result,
        words = String(args).split('\n'),
        firstWord = words[0],
        secondWord = words[1];

    for (i = 0, len = Math.min(firstWord.length, secondWord.length); i < len; i += 1){
        if (firstWord[i] > secondWord[i]) {
            result = '>';
            break;
        } else if (firstWord[i] < secondWord[i]) {
            result = '<';
            break;
        }
    }

    if (!result) {
        if (firstWord.length < secondWord.length) {
            result = '<';
        } else if (firstWord.length > secondWord.length) {
            result = '>';
        } else {
            result = '=';
        }
    }

    console.log(result);
}

solve(['hello\nhalo']);
solve(['food\nfood']);
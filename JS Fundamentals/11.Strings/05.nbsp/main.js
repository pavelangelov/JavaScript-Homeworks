function solve(args) {
    const text = args[0];
    let result = '';
    let symbol;

    for (let i = 0; i < text.length; i += 1){
        symbol = text[i];
        if (symbol === ' ') {
            result += '&nbsp;';
        } else {
            result += symbol;
        }
    }

    console.log(result);
}

let tests = [
    [ 'hello world' ],
    [ 'This text contains 4 spaces!!' ]
];

tests.map(test => solve(test));
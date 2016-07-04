function solve(args) {
    let expression = args[0];
    let openBrackets = 0;

    for (let i = 0, len = expression.length; i < len; i += 1){
        if (expression[i] == '(') {
            openBrackets += 1;
        } else if (expression[i] == ')') {
            openBrackets -= 1;
        }

        if (openBrackets < 0) {
            break;
        }
    }

    console.log(openBrackets === 0 ? 'Correct' : 'Incorrect');
}

let tests = [
    [ '((a+b)/5-d)' ],
    [ ')(a+b))' ]
];

tests.map(x => solve(x));
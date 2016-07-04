function solve(args) {
    const inputStr = String(args[0]);
    let reversedStr = '';
    for (let i = inputStr.length - 1; i >= 0; i -= 1){
        reversedStr += inputStr[i];
    }

    return reversedStr;
}

let tests = [
    [ 'sample' ],
    [ 'qwertytrewq' ]
];

tests.map(x => console.log(solve(x)));
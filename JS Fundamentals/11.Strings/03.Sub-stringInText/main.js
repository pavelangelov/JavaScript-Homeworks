function solve(args) {
    let searchedWord = args[0].toLowerCase();
    let text = args[1].toLowerCase();
    let index = text.indexOf(searchedWord);
    let counter = 0;

    while (index > -1) {
        counter += 1;
        index = text.indexOf(searchedWord, index + 1);
    }

    console.log(counter);
}

solve([
    'In',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);
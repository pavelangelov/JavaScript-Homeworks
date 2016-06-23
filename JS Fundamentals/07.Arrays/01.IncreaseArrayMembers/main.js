function solve(args) {
    var i,
        number = +args;

    for (i = 0; i < number; i += 1){
        console.log(i * 5);
    }
}

solve(5);
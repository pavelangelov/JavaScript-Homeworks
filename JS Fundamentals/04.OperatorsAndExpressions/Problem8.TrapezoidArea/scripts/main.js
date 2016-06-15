function solve(args) {
    var area,
        a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        h = parseFloat(args[2]);

    area = (a + b) * (h / 2);
    console.log(area.toFixed(7));
}

solve([5, 7, 12]);
solve([2, 1, 33]);
solve([8.5, 4.3, 2.7]);
solve([100, 200, 300]);
solve([0.222, 0.333, 0.555]);

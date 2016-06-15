function solve(args) {
   var  i,
        len,
        area,
        perimeter,
        x = parseFloat(args[0]),
        y = parseFloat(args[1]);

    area = x * y;
    perimeter = (x + y) * 2;
    console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2));
}

solve([3, 4]);
solve([2.5, 3]);
solve([5, 5]);

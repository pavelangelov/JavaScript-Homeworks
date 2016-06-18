function solve(args) {
    var discriminant,
        firstRoot,
        secondRoot,
        a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]);
    
    discriminant = (b * b) - (4 * a * c);
    if (discriminant > 0) {
        firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
        secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);

        console.log('x1=' + Math.min(firstRoot, secondRoot).toFixed(2) + '; x2=' + Math.max(firstRoot, secondRoot).toFixed(2));
    } else if (discriminant === 0) {
        firstRoot = -(b / (2 * a));
        console.log('x1=x2=' + firstRoot.toFixed(2));
    } else {
        console.log('no real roots');
    }
}

solve([2, 5, -3]);
solve([-1, 3, 0]);
solve([-0.5, 4, -8]);
solve([5, 2, 8]);
solve([0.2, 9.572, 0.2])
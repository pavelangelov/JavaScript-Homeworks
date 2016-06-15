function solve(args) {
    var mask,
        bit,
        bitposs = 3,
        number = args[0] | 0;

    mask = 1 << bitposs;
    bit = (number & mask) >> bitposs;
    console.log(bit);
}

solve([5]);
solve([8]);
solve([0]);
solve([15]);
solve([1024]);
solve([5343]);
solve([62241]);
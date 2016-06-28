function solve(args) {
    var largersCount = 0,
        len = +args[0],
        numbers = args[1].split(' ')
                        .map(function (number) {
                            return +number;
                          });
        for (i = 1; i < len - 1; i += 1){
            if (checkLargerThanNeighbours(numbers, i)) {
                largersCount += 1;
            }
        }

        function checkLargerThanNeighbours(numbersArr, currentIndex) {
            var previusNumber = numbersArr[currentIndex - 1],
                currentNumber = numbersArr[currentIndex],
                nextNumber = numbersArr[currentIndex + 1];
            
                return (currentNumber > previusNumber) && (currentNumber > nextNumber);
            
          }

          console.log(largersCount);
}

solve(['6', '-26 -25 -28 31 2 27']);
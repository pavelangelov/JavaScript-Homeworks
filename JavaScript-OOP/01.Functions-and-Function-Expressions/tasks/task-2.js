/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(startNumber, endNumber) {
	if (typeof startNumber === 'undefined' || typeof endNumber === 'undefined') {
        throw new Error('Missing parameter!');
    } else if (isNaN(+startNumber) || isNaN(+endNumber)) {
        throw new Error('Invalid parameters!');
    }

    startNumber = +startNumber;
    endNumber = +endNumber;

    var primeNumbers = [];
    for (var i = startNumber; i <= endNumber; i += 1){
        if (primeCheck(i)) {
            primeNumbers.push(i);
        }
    }
    

    function primeCheck(number) {
        var sqrt = Math.sqrt(number);

        if (number < 2) {
            return false;
        }

        for (var i = 2; i <= sqrt; i += 1){
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }
    
    return primeNumbers;
}

module.exports = findPrimes;
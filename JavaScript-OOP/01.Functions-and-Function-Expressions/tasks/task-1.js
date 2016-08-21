/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	
*/

function sum(numbers) {

    if(Array.isArray(numbers) && numbers.length === 0) {
        return null;
    } else if(!numbers) {
        throw new Error('Missing parameter!');
    }

	numbers.map(function(num) {
        if(isNaN(+num)) {
            throw new Error('Parameter is not convertible to Number!');
        }
    });

    var result = 0;
    numbers.map(function (n) {
        result += (+n);
      });

    return result;
}

module.exports = sum;
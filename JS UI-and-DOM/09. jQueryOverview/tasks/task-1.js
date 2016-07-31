 /// <reference path="../../typings/tsd.d.ts" />

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
  return function (selector, count) {

    if (typeof selector !== 'string') {
      throw new Error("Incorrect selector!");
    }
    var $container = $(selector),
        $ul = $('<ul />').addClass('items-list');

    if($container.length < 1) {
      return;
    } else if(count < 1) {
      throw new Error('Count cannot be less tha 1!');
    } else if(isNaN(count)) {
      throw new Error("Count must be Number!");
    }

    for (var i = 0; i < count; i += 1){
      $('<li />').addClass('list-item').html('List item #' + i)
                  .appendTo($ul);
    }

    $ul.appendTo($container);
  };
}

module.exports = solve;
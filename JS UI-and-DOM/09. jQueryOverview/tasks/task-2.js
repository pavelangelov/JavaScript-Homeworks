 /// <reference path="../../typings/tsd.d.ts" />

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
    if(typeof selector !== 'string' || $(selector).length < 1) {
      throw new Error('Incorrect selector');
    }
    var $buttons = $('.button').html('hide'),
        $contents = $('.content');

    $buttons.on('click', function () {
      var $this = $(this),
          $next = $this.next();
      if($next.hasClass('content')){
        if($next.css('display') === 'none') {
          $next.css('display', '');
          $this.html('hide');
        } else {
          $next.css('display', 'none');
          $this.html('show');
        }
      }
      })
  };
};

module.exports = solve;
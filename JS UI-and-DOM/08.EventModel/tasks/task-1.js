/* globals $ */

/* 
Create a function that takes an id or DOM element and:

    If an id is provided, select the element
        Finds all elements with class button or content within the provided element
        Change the content of all .button elements with "hide"
    When a .button is clicked:
        Find the topmost .content element, that is before another .button and:
            If the .content is visible:
                Hide the .content
                Change the content of the .button to "show"
            If the .content is hidden:
                Show the .content
                Change the content of the .button to "hide"
            If there isn't a .content element after the clicked .button and before other .button, do nothing
    Throws if:
        The provided DOM element is non-existant
        The id is neither a string nor a DOM element
*/

function solve(){
  return function (selector) {
      if (typeof selector !== "string" && typeof selector !== "object") {
          throw new Error("Incorrect selector type!");
      }
     var container;
      if(typeof selector === "string"){
       container = document.getElementById(selector);
     } else {
        container = selector;
     }

      if (container === null) {
          throw new Error("The provided DOM element doesn`t existant");
      }
      var buttons = container.getElementsByClassName('button');
      var contents = container.getElementsByClassName('content');

      [].forEach.call(buttons, x => x.innerHTML = 'hide');

    //   for (var i = 0; i < buttons.length; i += 1){
    //       buttons[i].innerHTML = 'hide';
    //   }
      
      container.addEventListener("click", function (ev) {
          var target = ev.target,
              targetClass = target.getAttribute('class');

          if (targetClass === "button") {
              var nextSibling = target.nextElementSibling,
                    nextSiblingClass = nextSibling.getAttribute('class');
              if(nextSiblingClass === "content") {
                  if(target.innerHTML === "hide"){
                      target.innerHTML = "show";
                      nextSibling.setAttribute("style", "display: none");
                  } else {
                      target.innerHTML = "hide";
                      nextSibling.removeAttribute("style");
                  }
              }
          }
        });
  };
}

module.exports = solve;

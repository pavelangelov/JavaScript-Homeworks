/* globals $ */

/* 
Create a function that takes an id or DOM element and an array of contents
* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {

  return function (element, contents) {

      if (!element || !contents) {
        throw new Error("Missing function parameters.");
      }
      if (typeof element !== "object") {
        container = document.getElementById(element);
      } else {
        container = element;
      }

      if (container === null) {
        throw new Error("There is no one element with this id!");
      }


      var fragment = document.createDocumentFragment();
      for (var i = 0; i < contents.length; i += 1){
        var currentContent = contents[i];
        if(typeof currentContent !== "string" && typeof currentContent !== "number"){
          throw new Error("Incorrect content type!");
        }
        var div = document.createElement("div");
        div.innerHTML = currentContent;
        fragment.appendChild(div);
      }

      container.innerHTML = "";
      container.appendChild(fragment);
  };
};


// BGCoder solution

/*
function solve() {
    return function (element, contents) {

      if (!element || !contents) {
        throw new Error("Missing function parameters.");
      }
      if (typeof element !== "object") {
        container = document.getElementById(element);
      } else {
        container = element;
      }

      if (container === null) {
        throw new Error("There is no one element with this id!");
      }


      var fragment = document.createDocumentFragment();
      for (var i = 0; i < contents.length; i += 1){
        var currentContent = contents[i];
        if(typeof currentContent !== "string" && typeof currentContent !== "number"){
          throw new Error("Incorrect content type!");
        }
        var div = document.createElement("div");
        div.innerHTML = currentContent;
        fragment.appendChild(div);
      }

      container.innerHTML = "";
      container.appendChild(fragment);
  };
}
*/
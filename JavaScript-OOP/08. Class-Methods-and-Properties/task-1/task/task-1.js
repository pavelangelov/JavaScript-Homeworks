'use strict';

class listNode {
    constructor(value) {
        
    }
}

class LinkedList {
    constructor() {
        this.listElements = [];
    }

    append(...elements) {
        elements.forEach(x => this.listElements.push(x));

        return this;
    }

    prepend(...elements) {
        for(let i = elements.length - 1; i >= 0; i -= 1) {
            this.listElements.unshift(elements[i]);
        }

        return this;
    }

    insert(...args) {
        var index =  args.shift(0),
            len = this.listElements.length;

        if (index === 0) {
            this.listElements.unshift(...args);
        } else if (index === len - 1) {
            this.listElements.push(...args);
        } else {
            var arr = [];
            for(let i = 0; i < len; i += 1) {
                if (i === index) {
                    arr.push(...args);
                }

            arr.push(this.listElements[i]);
            }

            this.listElements = arr;
        }

        return this;
    }

    removeAt(index) {
        return this.listElements.splice(index, 1);
    }

    at(index, value) {
        if (typeof value === 'undefined') {
            return this.listElements[index];
        } else {
            this.listElements[index] = value;
            
            return this;
        }
    }

    toArray() {
        return this.listElements.slice(0);
    }

    [Symbol.iterator]() {
        var index = -1;
        var data  = this.listElements;

        return {
            next: () => ({ value: data[++index], done: !(index in data) })
        };
    }

    get first() {
        if (this.listElements.length) {
            return this.listElements[0];
        }
    }

    get last() {
        if (this.listElements.length) {
            var lastElementIndex = this.listElements.length - 1;
            return this.listElements[lastElementIndex];
        }
    }

    get length() {
        return this.listElements.length;
    }

    toString() {
        return this.listElements.join(' -> ');
    }
}

module.exports = LinkedList;
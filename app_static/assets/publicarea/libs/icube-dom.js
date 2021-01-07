"use strict";
var icubeDOM, $;

icubeDOM = $ = (function() {
    function IcubeDOM(selector) {
        this.elements = document.querySelectorAll(selector);
    }
    IcubeDOM.prototype.addClass = function(className) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className);
        }
        return this
    }
    IcubeDOM.prototype.append = function(content) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML +=  content;
        }
        return this
    }
    IcubeDOM.prototype.attr = function(attributeName, value) {
       if (!arguments[1]) {
            return this.elements[0].attributes[attributeName].value
       } else {
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].setAttribute(attributeName, value);
            }
       }
       return this
    }
    IcubeDOM.prototype.click = function(handler) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener('click', handler)
        }
        return this
    } 
    IcubeDOM.prototype.dblclick = function(handler) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener('dblclick', handler)
        }
        return this
    }  
    IcubeDOM.prototype.first = function() {
        return this.elements[0]
    }
    IcubeDOM.prototype.get = function(index) {
        return this.elements[index]
    }
    IcubeDOM.prototype.hasClass = function(className) {
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].classList.contains(className)) {
                return true
            } else {
                return false;
            }
        }
    }
  
    return function(selector) {
        return new IcubeDOM(selector);
    };
}());
"use strict";
var icubeDOM, $;

/* TODO: umożliwić łańcuchowe wywoływanie metod (Method chaining) tam, gdzie ma to sens. */
icubeDOM = $ = (function() {
    function IcubeDOM(selector) {
        /* TODO: własność, do której zapiszemy kolekcję elementów */   
        this.elements = document.querySelectorAll(selector);
    }
    IcubeDOM.prototype.addClass = function(className) {
        /* TODO: metoda dodająca klasę do każdego elementu w kolekcji */
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className);
        }
    }
    IcubeDOM.prototype.append = function(content) {
        /* TODO: metoda dodająca strukturę HTML na koniec każdego elementu w kolekcji */
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML +=  content;
        }
    }
    IcubeDOM.prototype.attr = function(attributeName, value) {
        /* 
            TODO: metoda która zwraca wartość atrybutu pierwszego elementu w kolekcji lub jeśli podana została wartość 
            to ustawiamy ją dla każdego elementu w kolekcji
        */
       if (!arguments[1]) {
            return this.elements[0].attributes[attributeName].value
       } else {
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].setAttribute(attributeName, value);
            }
       }
    }
    IcubeDOM.prototype.click = function(handler) {
        /* TODO: podpinamy zdarzenie "click" */
    } 
    IcubeDOM.prototype.dblclick = function(handler) {
        /* TODO: podpinamy zdarzenie "dblclick" */
    }  
    IcubeDOM.prototype.first = function() {
        /* TODO: zwracamy pierwszy element w kolekcji */
        return this.elements[0]
    }
    IcubeDOM.prototype.get = function(index) {
        /* TODO: zwracamy jeden element z kolekcji po indeksie */
        return this.elements[index]
    }
    IcubeDOM.prototype.hasClass = function(className) {
        /* TODO: metoda, która sprawdza czy jakikolwiek element z kolekcji posiada klasę */
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


"use strict";

var $test = $('#test, .test');
var $firstFromTest = $test.first();

$test
    .addClass('container')
    .append('<p style="background: red; color: white">To jest dodany akapit</p>')
    .attr('title', 'Ustawiony title w skrypcie')
    .click(function() {
        console.log(this);
        console.log('test click()');
    })
    .dblclick(function() {
        alert('test dblclick()');
    });


console.log($test);
console.log('Wartość atrybutu ID: ' + $test.attr('id'));
console.log($test.get(2));
console.log($firstFromTest);
console.log('Ma klasę containers: ' + $test.hasClass('containers'));
console.log('Ma klasę container: ' + $test.hasClass('container'));
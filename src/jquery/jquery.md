
# jQuery Wrapping Demo

Deception, Responsibility, and Duck Punching JavaScript
Todd H Gardner

1. Show a native Element
2. Show a jQuery Element
3. Show getting the inner native Element from jQuery


var el = document.getElementById("test-id")
var $el = $("#test-id")

($el.get(0) === el)
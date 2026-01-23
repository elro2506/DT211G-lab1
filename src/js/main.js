
"use strict";
function myFunction() {
  var nav = document.getElementById("myLinks");
  nav.classList.toggle("is-open");
}

//Inspiration från Stackoverflow för att hämta ett random nummer mellan 0 och 100
function Random() {
        var rnd = Math.floor(Math.random() * 100);
        document.getElementById('tb').value = rnd;
    }

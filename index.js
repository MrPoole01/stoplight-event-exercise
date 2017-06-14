  (function() {
    'use strict';

    // YOUR CODE HERE
    // Decalre variable
    var stop = document.getElementById('stopLight');
    var slow = document.getElementById('slowLight');
    var go = document.getElementById('goLight');

    var stopBtn = document.getElementById('stopButton');
    var slowBtn = document.getElementById('slowButton');
    var goBtn = document.getElementById('goButton');


    // Toggle Light On and Off Function
    stopBtn.addEventListener('click', function() {
      stop.classList.toggle('stop');
    });
    slowBtn.addEventListener('click', function() {
      slow.classList.toggle('slow');
    });
    goBtn.addEventListener('click', function() {
      go.classList.toggle('go');
    });


    // Console.Log mouseenter Event function
    stopBtn.addEventListener('mouseenter', function () {
      console.log("Entered ",this.innerHTML," button");
    });
    slowBtn.addEventListener('mouseenter', function () {
      console.log("Entered ",this.innerHTML," button");
    });
    goBtn.addEventListener('mouseenter', function () {
      console.log("Entered ",this.innerHTML," button");
    });


    // Console.Log mouseleave Event function
    stopBtn.addEventListener('mouseleave', function () {
      console.log("Left ",this.innerHTML," button");
    });
    slowBtn.addEventListener('mouseleave', function () {
      console.log("Left ",this.innerHTML," button");
    });
    goBtn.addEventListener('mouseleave', function () {
      console.log("Left ",this.innerHTML," button");
    });

  })();

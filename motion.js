var posTop = 0;
var posLeft = 0;
var debounce = false


function myMove() {
  if (debounce == false) {
    debounce = true
    console.log(debounce)
    var elem = document.getElementById("animate");    
    elem.style.top = 0 + "px"
	  elem.style.left = 0 + "px"
    var id = setInterval(frame, 5);
    function frame() {
      console.log(debounce)
	   posTop++;
	    posLeft++;
	    elem.style.top = posTop + "px"; 
	    elem.style.left = posLeft + "px"; 
	    if ((posTop == 350) && (posLeft == 350)) {
		    clearInterval(id);
        debounce = false
      }
    }
  }
}

function up() {
  if (debounce == false) {
    debounce = true
    var elem = document.getElementById("animate");    
    var id = setInterval(frame, 5);
    function frame() {
  	  posTop--;
  	  elem.style.top = posTop + "px"; 
  	  if ((posTop == 0)) {
	  	  clearInterval(id);
        debounce = false
      }
    }
  }
}

function left() {
  if (debounce == false) {
    debounce = true
    var elem = document.getElementById("animate");    
    var id = setInterval(frame, 5);
    function frame() {
  	  posLeft--;
	    elem.style.left = posLeft + "px"; 
	    if ((posLeft == 0)) {
	  	  clearInterval(id);
        debounce = false
      }
   }
  }
}

function right() {
  if (debounce == false) {
    debounce = true
    var elem = document.getElementById("animate");    
    var id = setInterval(frame, 5);
    function frame() {
	    posLeft++;
	    elem.style.left = posLeft + "px"; 
	    if ((posLeft == 350)) {
		    clearInterval(id);
        debounce = false
      }
    }
  }
}

function down() {
  if (debounce == false) {
    debounce = true
   var elem = document.getElementById("animate");    
   var id = setInterval(frame, 5);
    function frame() {
  	  posTop++;
  	  elem.style.top = posTop + "px"; 
	    if ((posTop == 350)) {
  		  clearInterval(id);
        debounce = false
      }
    }
  }
}
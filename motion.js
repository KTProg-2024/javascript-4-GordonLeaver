var posTop = 0;
var posLeft = 0;

function myMove() {
  var elem = document.getElementById("animate");    
  var id = setInterval(frame, 5);
  function frame() {
	  posTop++;
	  posLeft++;
	  elem.style.top = posTop + "px"; 
	  elem.style.left = posLeft + "px"; 
	  if ((posTop == 350) && (posLeft == 350))
		  clearInterval(id);
  }
}

function up() {
  var elem = document.getElementById("animate");    
  var id = setInterval(frame, 5);
  function frame() {
	  posTop--;
	  elem.style.top = posTop + "px"; 
	  if ((posTop == 0))
		  clearInterval(id);
  }
}

function left() {
  var elem = document.getElementById("animate");    
  var id = setInterval(frame, 5);
  function frame() {
	  posLeft--;
	  elem.style.left = posLeft + "px"; 
	  if ((posLeft == 0))
		  clearInterval(id);
  }
}

function right() {
  var elem = document.getElementById("animate");    
  var id = setInterval(frame, 5);
  function frame() {
	  posLeft++;
	  elem.style.left = posLeft + "px"; 
	  if ((posLeft == 350))
		  clearInterval(id);
  }
}

function down() {
  var elem = document.getElementById("animate");    
  var id = setInterval(frame, 5);
  function frame() {
	  posTop++;
	  elem.style.top = posTop + "px"; 
	  if ((posTop == 350))
		  clearInterval(id);
  }
}
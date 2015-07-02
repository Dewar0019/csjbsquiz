Template.quizTwo.events({
	"click #startgame": function(event){
		console.log("pressed");
		init()
	}
})


//Source   @ https://dev.opera.com/articles/html5-canvas-painting/
	
  var canvas, context, tool;
  function init () {

    canvas = document.getElementById('gameboard');
    context = canvas.getContext('2d');
    context.lineWidth = 10;
    context.fillStyle="#FFFF00";
	context.fillRect(0,0,gameboard.width,gameboard.height);

	context.strokeStyle="#000";
    tool = new tool_pencil();

    // Attach the mousedown, mousemove and mouseup event listeners.
    canvas.addEventListener('mousedown', ev_canvas, false);
    canvas.addEventListener('mousemove', ev_canvas, false);
    canvas.addEventListener('mouseup',   ev_canvas, false);
    $("#startgame").html("Erase");
  }
  

  function tool_pencil () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
      	Session.set('positionX', ev._x); 
      	Session.set('positionY', ev._y);
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
      }
    };
  }

  // The general-purpose event handler. This function just determines the mouse 
  // position relative to the canvas element.
  function ev_canvas (ev) {
    if (ev.layerX || ev.layerX == 0) { 
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) {
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }

    // Call the event handler of the tool.
    var func = tool[ev.type];
    if (func) {
      func(ev);
    }
  }

Template.quizTwo.helpers({
	getX: function() {return Session.get("positionX");},   //Use Session.variables so they are reactive
	getY: function() {return Session.get("positionY");}
})
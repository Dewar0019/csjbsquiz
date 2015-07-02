
// function Model() {
// var clickX = [];
// var clickY = [];
// var clickDrag = [];
// var paint;
// }


// function addClick(x, y, dragging) {
//     clickX.push(x);
//     clickY.push(y);
//     clickDrag.push(dragging);
// }


// function drawNew() {
//     var i = clickX.length - 1
//     if (!clickDrag[i]) {
//         if (clickX.length == 0) {
//             context.beginPath();
//             context.moveTo(clickX[i], clickY[i]);
//             context.stroke();
//         } else {
//             context.closePath();

//             context.beginPath();
//             context.moveTo(clickX[i], clickY[i]);
//             context.stroke();
//         }
//     } else {
//         context.lineTo(clickX[i], clickY[i]);
//         context.stroke();
//     }
// }


// Model.prototype.update = function(){
// 	var theTime = (new Date()).getTime();
// 	var dt = (theTime - this.lastTime); // in milliseconds
// 	this.lastTime = theTime;
// 	   };
// theModel = new Model();
// return theModel;


// }())
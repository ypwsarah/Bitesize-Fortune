// "use strict";


// dragElement(document.getElementById("mydiv"));
// dragElement(document.getElementById("mydiv1"));
// dragElement(document.getElementById("mydiv2"));
// dragElement(document.getElementById("mydiv3"));

// function dragElement(elmnt) {
  
//   if (document.getElementById(elmnt.id + "header") && getFortune == false) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

//   function getRockPos(elmnt){
//     return {x : elmnt.offsetLeft - pos1 + "px ", y : elmnt.offsetTop - pos2 + "px "};
//     // console.log(elmnt.offsetLeft - pos1 + "px ", elmnt.offsetTop - pos2 + "px ");
//   }
// // background-image:url('image/s1.png')

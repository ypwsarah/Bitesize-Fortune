//https://www.youtube.com/watch?v=kX18GQurDQg
//https://www.youtube.com/watch?v=CZP1iQFQjEY



// "use strict";

// document.body.onload = addElement;
let square = document.querySelector('.square');
let modifier = 20;
let counter = 0;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let x = canvas.width/2-50;
let y = canvas.height/2;

let center_x= canvas.width/2-150;
let center_y= canvas.height/2-30;

// var d = document.getElementById('form');
// d.style.position = "absolute";
// d.style.left = center_x-199+'px';
// d.style.top = center_y-200+'px';

// let vx = 0;
// let vy = 0;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;


let getFortune = false;
let ExMode = false;
let InMode = false;

let phy, env, soc, fin = false;
let men, emo, rec, spi = false;

// console.log("Window Location:", window.location);
const myKeysValues = window.location.search;
// console.log("Keys & Values:", myKeysValues);

const urlParams = new URLSearchParams(myKeysValues);

const username = urlParams.get('username');
const footstep_week = urlParams.get('footstep_week');
const footstep_e = urlParams.get('footstep_e');

var rn5 = Math.floor(Math.random() * 5);
var rn3 = Math.floor(Math.random() * 3) + 5;
var rn3_ = Math.floor(Math.random() * 3) + 8;
var rn2 = Math.floor(Math.random() * 2) + 11;

//Object.keys(data.fortune).length

var rn = Math.floor(Math.random()*14)+13;

// console.log("Name:", username);


if(footstep_week*1 <= footstep_e){
    ExMode = true;
    // console.log(ExMode);
}
else if(footstep_week*1 > footstep_e){
    InMode = true;
    // console.log(InMode);
};

// var body_ = document.getElementById("body");

var img = new Image();
img.src = "image/paw.svg";

var vis1 = document.getElementById('s1');
var vis2 = document.getElementById('s2');
var vis3 = document.getElementById('s3');
var vis4 = document.getElementById('s4');
// var s1 = new Image();
// img.src = "image/s1.png";

function changeColor(color){
    document.body.style.background = color;
}

// background-image:url('image/s1.png')

function b0(){
    // changeColor('rgba(255, 255, 255, 0)');
    // body.preventDefault;
    document.body.style.background = "url('image/sparrow_A.svg')";
    body.classList.remove('animate');
    vis1.style.visibility="hidden";
    vis2.style.visibility="hidden";
    vis3.style.visibility="hidden";
    vis4.style.visibility="hidden";
    // void body.offsetWidth;
    // body.classList.add('animate_out');
    
}
function b1(){
    changeColor('black');
    body.classList.add('animate');
    vis1.style.visibility="visible";
    
}

function b2(){
    changeColor('black');
    body.classList.add('animate');
    vis3.style.visibility="visible";
}


function b3(){
    changeColor('black');
    body.classList.add('animate');
    vis2.style.visibility="visible";
}


function b4(){
    changeColor('black');
    body.classList.add('animate');
    vis4.style.visibility="visible";
}


async function getCare(){
    fetch('selfcare.json')
    .then(response => response.json())
    .then(data =>{
        console.log(data.fortune.length);
    })

    if(phy == true){
        fetch('selfcare.json')
        .then(response => response.json())
        .then(data =>{
           document.querySelector("#card").innerText = data.fortune[rn5].fortuneDescription
        })
    }

    if(env == true){
        fetch('selfcare.json')
        .then(response => response.json())
        .then(data =>{
           document.querySelector("#card").innerText = data.fortune[rn3].fortuneDescription;
        })
    }

    if(soc == true){
        fetch('selfcare.json')
        .then(response => response.json())
        .then(data =>{
           document.querySelector("#card").innerText = data.fortune[rn3_].fortuneDescription;
        })
    }

    if(fin == true){
        fetch('selfcare.json')
        .then(response => response.json())
        .then(data =>{
           document.querySelector("#card").innerText = data.fortune[rn2].fortuneDescription;
        })
    }

    if(men == true || emo == true || rec == true || spi == true){
        fetch('selfcare.json')
        .then(response => response.json())
        .then(data =>{
           document.querySelector("#card").innerText = data.fortune[rn].fortuneDescription;
        })
    }
    
}

function update(){
   
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img, x, y);
    // ctx.drawImage(s1, x, y);
    x += vxl;
    x += vxr;
    y += vyu;
    y += vyd;
    // console.log(x);
if(ExMode == true){
    if(x<canvas.width/4 && y<canvas.height/2){
        b1();
    }
    else if(x>canvas.width-canvas.width/3 && y>canvas.height/2-canvas.height/8 && y<canvas.height-canvas.height/8){
        b2();
    }
    else if(x>canvas.width-canvas.width/3 && y<canvas.height/3){
        b3();
    }
    else if(x<canvas.width/3+canvas.width/12 && x>canvas.width/6 && y>canvas.height-canvas.height/2-canvas.height/9){
        b4();
    }
    else{
        b0();
    }
};

if(InMode == true){
    var grab = document.getElementById("mydiv");
    grab.style.visibility="visible";
    var grab = document.getElementById("mydiv1");
    grab.style.visibility="visible";
    var grab = document.getElementById("mydiv2");
    grab.style.visibility="visible";
    var grab = document.getElementById("mydiv3");
    grab.style.visibility="visible";
    document.getElementById("info").innerHTML = document.getElementById("info").innerHTML.replace('Use the WASD keys or the arrow keys to explore your personalized map! <br>Press Spacebar in your favorite location to pack a souvenir~', 'Drag and position the sparrows! <br>Press Spacebar when you are happy with the map~');
    men, emo, rec, spi = true;
    document.getElementById("card").style.color = "#AD8D8D";
}



var a = document.getElementById('info');
a.style.left = x-665+'px';
a.style.top = y+125+'px';

    requestAnimationFrame(update);


}

update();




addEventListener("keydown",function(e){
    if(getFortune==false){
    if(e.code == 'KeyD' || e.code == 'ArrowRight') vxr = 5;
    if(e.code == 'KeyA' || e.code == 'ArrowLeft') vxl = -5;
    if(e.code == 'KeyW' || e.code == 'ArrowUp') vyu = -5;
    if(e.code == 'KeyS' || e.code == 'ArrowDown') vyd = 5;
    canvas.classList.add('blink');
    var a = document.getElementById('info');
    a.style.visibility="hidden";
    if(e.key == " ") getFortune = true;
    if(getFortune == true && counter == 0){
        counter = 1;
        const newLabel = document.createElement("h1");
        newLabel.for = 'fortune';
        this.document.getElementById("card").appendChild(newLabel);
        if (vis1.style.visibility=="visible"){
            phy = true;
        }
        else if(vis2.style.visibility == "visible"){
            env = true;
        }
        else if(vis3.style.visibility == "visible"){
            soc = true;
        }
        else if(vis4.style.visibility == "visible"){
            fin = true;
        }
        getCare();

    }
}
})

addEventListener("keyup",function(e){
    if(e.code == 'KeyD' || e.code == 'ArrowRight') vxr = 0;
    if(e.code == 'KeyA' || e.code == 'ArrowLeft') vxl = 0;
    if(e.code == 'KeyW' || e.code == 'ArrowUp') vyu = 0;
    if(e.code == 'KeyS' || e.code == 'ArrowDown') vyd = 0;
    canvas.classList.remove('blink');
})

//DRAG

dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv1"));
dragElement(document.getElementById("mydiv2"));
dragElement(document.getElementById("mydiv3"));



function dragElement(elmnt) {
  
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (getFortune == false){
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
}

  function closeDragElement() {

    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
}
}

  function getRockPos(elmnt){
    return {x : elmnt.offsetLeft - pos1 + "px ", y : elmnt.offsetTop - pos2 + "px "};
    // console.log(elmnt.offsetLeft - pos1 + "px ", elmnt.offsetTop - pos2 + "px ");
  }
// background-image:url('image/s1.png')

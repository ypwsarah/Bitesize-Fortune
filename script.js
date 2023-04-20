//https://www.youtube.com/watch?v=kX18GQurDQg

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

var d = document.getElementById('form');
// d.style.position = "absolute";
d.style.left = center_x-199+'px';
d.style.top = center_y-200+'px';

// var f = document.getElementById('form_ticket');
// // d.style.position = "absolute";
// f.style.left = center_x+'px';
// f.style.top = center_y+'px';



// let vx = 0;
// let vy = 0;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;

let getFortune = false;

// var body_ = document.getElementById("body");



var img = new Image();
img.src = "image/paw.svg";

function changeColor(color){
    document.body.style.background = color;
}

function b0(){
    changeColor('white');
    // body.preventDefault;
    body.classList.remove('animate');
    // void body.offsetWidth;
    // body.classList.add('animate_out');
    
}
function b1(){
    changeColor('#9acf1f');
    body.classList.add('animate');
}

function b2(){
    changeColor('yellow');
    body.classList.add('animate');
}


function b3(){
    changeColor('black');
    body.classList.add('animate');
}


function b4(){
    changeColor('purple');
    body.classList.add('animate');
}


function update(){
   
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img, x, y);
    x += vxl;
    x += vxr;
    y += vyu;
    y += vyd;
    console.log(x);

    if(x<canvas.width/3 && y<canvas.height/3){
        b1();
    }
    else if(x>canvas.width-canvas.width/3 && y>canvas.height-canvas.height/3){
        b2();
    }
    else if(x>canvas.width-canvas.width/3 && y<canvas.height/3){
        b3();
    }
    else if(x<canvas.width/3 && y>canvas.height-canvas.height/3){
        b4();
    }
    else{
        b0();
    }
   
    // ctx.fillRect(x,y,50,50);
    // ctx.fillStyle = "blue";

//     var d = document.getElementById('form');
// // d.style.position = "absolute";
// // d.style.left = center_x+'px';
// // d.style.top = center_y+'px';
// d.style.left = x+120+'px';
// d.style.top = y+'px';

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
        const newLabel = document.createElement("label");
        newLabel.for = 'footstep';
        newLabel.innerHTML = "What's your Average Footstep in the Past Week? <br>";
        this.document.getElementById("form").appendChild(newLabel);
        const newDiv = document.createElement("input");
        newDiv.type = 'number';
        document.getElementById("form").appendChild(newDiv);
        counter = 1;

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

// function addElement(){
//     if(getFortune == true){
//     const newDiv = document.createElement("input");
//     newDiv.type = 'number';
//     // newDiv.setAttribute('id','footstep');
//     // document.getElementById("footstep").type="number";
//     // const newContent = document.createTextNode("Hi there and greetings!");
//     // newDiv.appendChild(newContent);
//     document.getElementById("form").appendChild(newDiv);
// }
// }

// addElement();

// document.querySelector('body').addEventListener('click', e => {
//     e.target.style.background = "red";
//   });

// window.addEventListener('load',()=>{
//     square.style.position='absolute';
//     square.style.left = 0;
//     square.style.top = 0;
// });

// window.addEventListener('keydown',(event)=>{
//     // const{style} = square;
//     switch(event.key){
//         case 'ArrowUp': square.style.top = parseInt(square.style.top)-modifier+'px';break;
//         case 'ArrowDown': square.style.top = parseInt(square.style.top)+modifier+'px';break;
//         case 'ArrowLeft': square.style.left = parseInt(square.style.left)-modifier+'px';break;
//         case 'ArrowRight': square.style.left = parseInt(square.style.left)+modifier+'px';break;
//     }
// });
//https://www.youtube.com/watch?v=kX18GQurDQg

let y = window.innerHeight/2-200;


let getFortune = false;

function update(){

    var d = document.getElementById('form_ticket');
        d.style.top = y+'px';

    requestAnimationFrame(update);
}

update();
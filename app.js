let gameseq =[];
let userseq =[];
let btns = ["red","yellow","green","blue"];

let started = false;
let level = 0;
let score = 0;
let highScore=0;
let h3 = document.querySelectorAll("h3");
let scr=h3[0];
let highscr=h3[1];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false){
    console.log("game started");
    started = true;
    levelUp();
    }
  
} );

 function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout (function () {
     btn.classList.remove("flash");   
    },250);
 }


 
 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout (function () {
     btn.classList.remove("userflash");   
    },250);
 }



 function levelUp() {
    userseq=[];
    level++;
    h2.innerText= `level ${level}`;
//choosing random index between 0-3
let ranIndx = Math.floor(Math.random() * 3 );
let ranColr =  btns[ranIndx];
let ranbtn = document.querySelector(`.${ranColr}`);
// console.log(ranIndx);
// console.log(ranColr);
// console.log(ranbtn);
gameseq.push(ranColr);
console.log(gameseq);
    btnFlash(ranbtn);
}
function checkAns(indx){
   // console.log("curr level :", level);
   //let indx = level-1;
   if(userseq[indx] === gameseq[indx]){
    score = score+5;
   // highScore = score;
    scr.innerHTML=`SCORE : <b>${score}</b>`;
    if(score>=highScore){
        highScore = score;
        highscr.innerHTML=`HIGH SCORE : <b>${highScore}</b>`;

    }
   
    if(userseq.length == gameseq.length){
    setTimeout(levelUp,1000);
}
   }else{
    h2.innerHTML= `GAME OVER ! your score was <i>${score}</i> <br>PRESS ANY KEY TO START.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="rgb(208, 203, 203)";   
    },1000);
    reset();
   }
}

function btnPress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);
    let userColr = btn.getAttribute("id");
    //console.log(userColr);
    userseq.push(userColr);
   // console.log(userseq);
   checkAns(userseq.length-1);

}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener("click",btnPress);
    }



function reset(){
    started= false;
    gameseq=[];
    userseq=[];
    level=0;
    score=0;
    scr.innerHTML=`SCORE : <b>${score}</b>`;
}
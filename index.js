// import ConfettiGenerator from "./confetti-js-master/src/confetti";
var movesLeft=10;
var computer=0;
var player=0;
var start=0;
function myFunction(){
      document.getElementById('player1').innerHTML=player;
      document.getElementById('computer1').innerHTML=computer;
      start++;
      document.getElementById('n5').style.visibility="hidden";
      document.getElementById('demo1').style.visibility="visible";
      document.getElementById('demo1').innerHTML="Moves Left: " + movesLeft;
      document.getElementById('demo').style.visibility="visible";
      document.getElementById('demo').innerHTML="Choose Your Move!"
}
function Clicked(val){
     if(start==0){return;}
      movesLeft--;
      document.getElementById('demo1').innerHTML="Moves Left: " + movesLeft;
      let txt= document.getElementById('demo');
      let num=Math.ceil(Math.random()*3);
      if(val=='rock') 
      {
          if(num==1){
              txt.innerHTML="Tie!";
          }
          else if(num==2){
              txt.innerHTML="Paper beats Rock! Computer Won";
              computer++;
          }
          else if(num==3){
              txt.innerHTML="Rock beats Scissors! You Won";
              player++;
          }
      } 
      else if(val=='paper') 
      {
          if(num==1){
              txt.innerHTML="Paper beats Rock! You Won"
              player++;
          }
          else if(num==2){
              txt.innerHTML="Tie!"
          }
          else if(num==3){
              txt.innerHTML="Scissors beat Paper! Computer Won"
              computer++;
          }
      } 
      else if(val=='scissors') 
      {
          if(num==1){
              txt.innerHTML="Rock beats Scissors! Computer Won"
              computer++;
          }
          else if(num==2){
              txt.innerHTML="Scissors beats Paper! You Won"
              player++;
          }
          else if(num==3){
              txt.innerHTML="Tie!"
          }
      } 
      document.getElementById('player1').innerHTML=player;
      document.getElementById('computer1').innerHTML=computer;
      if(movesLeft==0){
        // console.log('REstart')  
        result();
      }
}
function result(){
    if(player>computer){
        document.getElementById('demo').innerHTML="YOU WON 🎉";
        // import ConfettiGenerator from "confetti.js";
        // startit();
        // stopit();        
    }
    else if(player<computer){
        document.getElementById('demo').innerHTML="COMPUTER WON!";
    }
    else if(player==computer){
        document.getElementById('demo').innerHTML="TIE!";
    }
    player=0;
    computer=0;
    restart();
}
function restart(){
    movesLeft=10;
    document.getElementById('n5').innerHTML="Restart";
    document.getElementById('n5').style.visibility="visible";
    start=0;
}
// confetti -> Not working, some issue here!
const startit = () => {
    setTimeout(function () {
      console.log("start");
      confetti.start();
    }, 1000);
  };

  const stopit = () => {
    setTimeout(function () {
      console.log("stop");
      confetti.stop();
    }, 6000);
  };
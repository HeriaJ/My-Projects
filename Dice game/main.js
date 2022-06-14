let die1;
let die2;
let random = Math.floor(Math.random()*6+1);
let random2 = Math.floor(Math.random()*6+1);

function player1Dice(p1){
    if(p1 == 1){
         die1 = document.querySelectorAll('.dice')[0].lastElementChild.setAttribute('src','./images/dice1.png');
    }else if (p1==2){
         die1 = die1 = document.querySelectorAll('.dice')[0].lastElementChild.setAttribute('src','./images/dice2.png');
    }
    else if (p1==3){
         die1 = die1 = document.querySelectorAll('.dice')[0].lastElementChild.setAttribute('src','./images/dice3.png');
    }
    else if (p1==4){
         die1 = die1 = document.querySelectorAll('.dice')[0].lastElementChild.setAttribute('src','./images/dice4.png');
    }
    else if (p1==5){
         die1 = die1 = document.querySelectorAll('.dice')[0].lastElementChild.setAttribute('src','./images/dice5.png');
    }
    else if (p1==6){
         die1 = die1 = document.querySelectorAll('.dice')[0].lastElementChild.setAttribute('src','./images/dice6.png');
    }
}

function player2Dice(p2){
    if(p2 == 1){
       die2 = document.querySelectorAll('.dice')[1].lastElementChild.setAttribute('src','./images/dice1.png');
   }else if (p2==2){
       die2 = document.querySelectorAll('.dice')[1].lastElementChild.setAttribute('src','./images/dice2.png');
   }
   else if (p2==3){
       die2 = document.querySelectorAll('.dice')[1].lastElementChild.setAttribute('src','./images/dice3.png');
   }
   else if (p2==4){
       die2 = document.querySelectorAll('.dice')[1].lastElementChild.setAttribute('src','./images/dice4.png');
   }else if(p2==5){
       die2  = document.querySelectorAll('.dice')[1].lastElementChild.setAttribute('src','./images/dice5.png');
   }
   else if (p2==6){
       die2  = document.querySelectorAll('.dice')[1].lastElementChild.setAttribute('src','./images/dice6.png');
   }
}

function roll(x,y){
    player1Dice(x);
    player2Dice(y);
    if(x > y){
        document.querySelector('h1').textContent="Player 1 WINS!";
    }else if (y > x){
        document.querySelector('h1').textContent="Player 2 WINS!";
    }else if (x == y){
        document.querySelector('h1').textContent="IT'S A DRAW";
    }
}


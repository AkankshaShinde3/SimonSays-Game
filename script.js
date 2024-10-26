let gameSeq = [];
let userSeq = [];

let startGame = false;
let level = 0;
let h2 = document.querySelector("h2");
let buttons = ["red", "yellow", "purple", "green"];

document.addEventListener("keypress", function(){
    if(startGame == false)
    {
        console.log("Game started wooohoo!!!");
        started = true;
        levelup();
    }   
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function levelup(){

    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = buttons[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randombtn);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn)
{
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    console.log("button was pressed");
    // console.log(this);
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkSeq(userSeq.length - 1);
}

function checkSeq(idx)
{
    // let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelup, 1000);
        }
        // console.log("Great Go Ahead !!!");
    }
    else
    {
        h2.innerHTML = `GAME OVER Wrong color :( <br><b>Your Score is ${level}<b><br>Press any key to restart<br>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        }, 200);
        reset();
    }
}

function reset()
{
    startGame = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

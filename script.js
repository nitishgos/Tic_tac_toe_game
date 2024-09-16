console.log("welcome to tic tac toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let isGameover = false;

const checkTurn = function() {
    return turn === "X" ? "O" : "X";
}

const checkwin = function() {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2,5,5,0],
        [3, 4, 5,5,15,0],
        [6, 7, 8,5,25,0],
        [0, 3, 6,-5,15,90],
        [1, 4, 7,5,15,90],
        [2, 5, 8,15,15,90],
        [0, 4, 8,5,15,45],
        [2, 4, 6,5,15,135]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            if (!isGameover) {
                document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won"
                isGameover = true
                document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
                document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width="20vw";
            }
        }
    });
}

//main part
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', function() {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = checkTurn();
            audioTurn.play();
            checkwin();
            if (!isGameover) {
                document.querySelector(".info").innerHTML = "Turn for " + turn;
            }
        }
    })
})
reset.addEventListener('click',function(){
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isGameover=false;
    document.querySelector(".info").innerHTML = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width="0";
})

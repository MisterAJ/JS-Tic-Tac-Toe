// Global Variables

let turnCount = 0;
let currentPlayer = "O";

// Click Listeners

$('#box1').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton1 = true
    }
    if(currentPlayer === "O") {
        oButton1 = true
    }
    endOfTurn();
});
$('#box2').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton2 = true
    }
    if(currentPlayer === "O") {
        oButton2 = true
    }
    endOfTurn();
});
$('#box3').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton3 = true
    }
    if(currentPlayer === "O") {
        oButton3 = true
    }
    endOfTurn();
});
$('#box4').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton4 = true
    }
    if(currentPlayer === "O") {
        oButton4 = true
    }
    endOfTurn();
});
$('#box5').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton5 = true
    }
    if(currentPlayer === "O") {
        oButton5 = true
    }
    endOfTurn();
});
$('#box6').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton6 = true
    }
    if(currentPlayer === "O") {
        oButton6 = true
    }
    endOfTurn();
});
$('#box7').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton7 = true
    }
    if(currentPlayer === "O") {
        oButton7 = true
    }
    endOfTurn();
});
$('#box8').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton8 = true
    }
    if(currentPlayer === "O") {
        oButton8 = true
    }
    endOfTurn();
});
$('#box9').click(function () {
    $(this).addClass(currentPlayer + "Set");
    if(currentPlayer === "X"){
        xButton9 = true
    }
    if(currentPlayer === "O") {
        oButton9 = true
    }
    endOfTurn();
});

// Other Listeners

$('.box').hover(function() {
                $(this).addClass(currentPlayer)},
                function () {
                $(this).removeClass(currentPlayer)
                }
                );

// Functions

function switchPlayer() {
    if(currentPlayer == "X"){
        currentPlayer = "O";
        $('#player1').addClass('active');
        $('#player2').removeClass('active');
    }else{
        currentPlayer = "X";
        $('#player1').removeClass('active');
        $('#player2').addClass('active');
    }
}

function endOfTurn() {
    turnCount ++;
    if(checkForXWin()){
        console.log("X Wins!");
        alert('X WINS!')
        
    }
    if(checkForOWin()){
        console.log("O Wins!");
        alert('O WINS!')
    }
    if (turnCount === 9 && !checkForXWin() && !checkForXWin()){
        console.log("TIE!");
        alert("It's a TIE!")
    }
    switchPlayer();
}
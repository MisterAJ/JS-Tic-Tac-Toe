let ticTacToe = function () {

    $('#start').addClass('slideUp');

// Global Variables

    let turnCount = 0;
    let currentPlayer = "O";
    let setClass;

    let xButton1 = false;
    let xButton2 = false;
    let xButton3 = false;
    let xButton4 = false;
    let xButton5 = false;
    let xButton6 = false;
    let xButton7 = false;
    let xButton8 = false;
    let xButton9 = false;

    let oButton1 = false;
    let oButton2 = false;
    let oButton3 = false;
    let oButton4 = false;
    let oButton5 = false;
    let oButton6 = false;
    let oButton7 = false;
    let oButton8 = false;
    let oButton9 = false;

    let oWin = '<div class="screen screen-win screen-win-one" id="finish"><header>';
    oWin += '<h1>Tic Tac Toe</h1><p class="Winner"></p><a href="#" class="button reload">';
    oWin += 'New game</a></header></div>';

    let xWin = '<div class="screen screen-win screen-win-two" id="finish"><header>';
    xWin += '<h1>Tic Tac Toe</h1><p class="Winner"></p><a href="#" class="button reload">';
    xWin += 'New game</a></header></div>';

    let tie = '<div class="screen screen-win screen-win-tie" id="finish"><header>';
    tie += '<h1>Tic Tac Toe</h1><p class="Winner"></p><a href="#" class="button reload">';
    tie += 'New game</a></header></div>';

// Click Listeners

    $('#box1').click(function () {
        if (!xButton1 && !oButton1) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton1 = true
            }
            if (currentPlayer === "O") {
                oButton1 = true
            }
            endOfTurn();
        }
    });
    $('#box2').click(function () {
        if (!xButton2 && !oButton2) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton2 = true
            }
            if (currentPlayer === "O") {
                oButton2 = true
            }
            endOfTurn();
        }
    });
    $('#box3').click(function () {
        if (!xButton3 && !oButton3) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton3 = true
            }
            if (currentPlayer === "O") {
                oButton3 = true
            }
            endOfTurn();
        }
    });
    $('#box4').click(function () {
        if (!xButton4 && !oButton4) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton4 = true
            }
            if (currentPlayer === "O") {
                oButton4 = true
            }
            endOfTurn();
        }
    });
    $('#box5').click(function () {
        if (!xButton5 && !oButton5) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton5 = true
            }
            if (currentPlayer === "O") {
                oButton5 = true
            }
            endOfTurn();
        }
    });
    $('#box6').click(function () {
        if (!xButton6 && !oButton6) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton6 = true
            }
            if (currentPlayer === "O") {
                oButton6 = true
            }
            endOfTurn();
        }
    });
    $('#box7').click(function () {
        if (!xButton7 && !oButton7) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton7 = true
            }
            if (currentPlayer === "O") {
                oButton7 = true
            }
            endOfTurn();
        }
    });
    $('#box8').click(function () {
        if (!xButton8 && !oButton8) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton8 = true
            }
            if (currentPlayer === "O") {
                oButton8 = true
            }
            endOfTurn();
        }
    });
    $('#box9').click(function () {
        if (!xButton9 && !oButton9) {
            $(this).addClass(currentPlayer + "Set");
            if (currentPlayer === "X") {
                xButton9 = true
            }
            if (currentPlayer === "O") {
                oButton9 = true
            }
            endOfTurn();
        }
    });



// Other Listeners

    $('.box').hover(function () {
            setClass = currentPlayer;
            $(this).addClass(setClass)
        },
        function () {
            $(this).removeClass(setClass)
        }
    );


// Functions

    function checkForXWin() {
        let playerWins = false;

        if (xButton1) {
            if (xButton2) {
                if (xButton3) {
                    playerWins = true;

                }
            }
        }

        if (xButton4) {
            if (xButton5) {
                if (xButton6) {
                    playerWins = true;
                }
            }
        }

        if (xButton7) {
            if (xButton8) {
                if (xButton9) {
                    playerWins = true;
                }
            }
        }

        if (xButton1) {
            if (xButton4) {
                if (xButton7) {
                    playerWins = true;
                }
            }
        }

        if (xButton2) {
            if (xButton5) {
                if (xButton8) {
                    playerWins = true;
                }
            }
        }

        if (xButton3) {
            if (xButton6) {
                if (xButton9) {
                    playerWins = true;
                }
            }
        }

        if (xButton1) {
            if (xButton5) {
                if (xButton9) {
                    playerWins = true;
                }
            }
        }

        if (xButton3) {
            if (xButton5) {
                if (xButton7) {
                    playerWins = true;
                }
            }
        }
        return playerWins;
    }

    function checkForOWin() {
        let computerWins = false;

        if (oButton1) {
            if (oButton2) {
                if (oButton3) {
                    computerWins = true;
                }
            }
        }

        if (oButton4) {
            if (oButton5) {
                if (oButton6) {
                    computerWins = true;
                }
            }
        }

        if (oButton7) {
            if (oButton8) {
                if (oButton9) {
                    computerWins = true;
                }
            }
        }

        if (oButton1) {
            if (oButton4) {
                if (oButton7) {
                    computerWins = true;
                }
            }
        }

        if (oButton2) {
            if (oButton5) {
                if (oButton8) {
                    computerWins = true;
                }
            }
        }

        if (oButton3) {
            if (oButton6) {
                if (oButton9) {
                    computerWins = true;
                }
            }
        }

        if (oButton1) {
            if (oButton5) {
                if (oButton9) {
                    computerWins = true;
                }
            }
        }

        if (oButton3) {
            if (oButton5) {
                if (oButton7) {
                    computerWins = true;
                }
            }
        }
        return computerWins;
    }

    function switchPlayer() {
        if (currentPlayer == "X") {
            currentPlayer = "O";
            $('#player1').addClass('active');
            $('#player2').removeClass('active');
        } else {
            currentPlayer = "X";
            $('#player1').removeClass('active');
            $('#player2').addClass('active');
        }
    }

    function endOfTurn() {
        turnCount++;
        if (checkForXWin()) {
            console.log("X Wins!");
            $('#start').after(xWin);
            $(".reload").click(function () {
                location.reload()
            });
        }
        if (checkForOWin()) {
            console.log("O Wins!");
            $('#start').after(oWin);
            $(".reload").click(function () {
                location.reload()
            });
        }
        if (turnCount === 9 && !checkForXWin() && !checkForXWin()) {
            console.log("TIE!");
            $('#start').after(tie);
            $(".reload").click(function () {
                location.reload()
            });
        }
        switchPlayer();
    }


    /*
     Board Config
     1 2 3
     4 5 6
     7 8 9
     */

    /*
     Win Conditions
     123 - 456 - 789
     147 - 258 - 369
     159 - 357
     */


};
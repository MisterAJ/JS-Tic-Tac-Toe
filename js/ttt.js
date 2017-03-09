// Global Variables

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

function checkForXWin(){
    let playerWins = false;

    if(xButton1){
        if(xButton2) {
            if(xButton3){
                playerWins = true;

            }
        }
    }

    if(xButton4){
        if(xButton5) {
            if(xButton6){
                playerWins = true;
            }
        }
    }

    if(xButton7){
        if(xButton8) {
            if(xButton9){
                playerWins = true;
            }
        }
    }

    if(xButton1){
        if(xButton4) {
            if(xButton7){
                playerWins = true;
            }
        }
    }

    if(xButton2){
        if(xButton5) {
            if(xButton8){
                playerWins = true;
            }
        }
    }

    if(xButton3){
        if(xButton6) {
            if(xButton9){
                playerWins = true;
            }
        }
    }

    if(xButton1){
        if(xButton5) {
            if(xButton9){
                playerWins = true;
            }
        }
    }

    if(xButton3){
        if(xButton5) {
            if(xButton7){
                playerWins = true;
            }
        }
    }
    return playerWins;
}

function checkForOWin(){
    let computerWins = false;

    if(oButton1){
        if(oButton2) {
            if(oButton3){
                computerWins = true;
            }
        }
    }

    if(oButton4){
        if(oButton5) {
            if(oButton6){
                computerWins = true;
            }
        }
    }

    if(oButton7){
        if(oButton8) {
            if(oButton9){
                computerWins = true;
            }
        }
    }

    if(oButton1){
        if(oButton4) {
            if(oButton7){
                computerWins = true;
            }
        }
    }

    if(oButton2){
        if(oButton5) {
            if(oButton8){
                computerWins = true;
            }
        }
    }

    if(oButton3){
        if(oButton6) {
            if(oButton9){
                computerWins = true;
            }
        }
    }

    if(oButton1){
        if(oButton5) {
            if(oButton9){
                computerWins = true;
            }
        }
    }

    if(oButton3){
        if(oButton5) {
            if(oButton7){
                computerWins = true;
            }
        }
    }
    return computerWins;
}



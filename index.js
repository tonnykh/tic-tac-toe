// const gameboardCells = document.querySelectorAll(".gameboard-cell");


// gameboardCells.forEach((gameboardCell) => {

//     gameboardCell.addEventListener('click', () => {
//         console.log(gameboardCell);
//         displayX(gameboardCell);

//     });
// });

// function displayX(cell) {
//     const i = document.createElement('i');
//     i.classList.add("fa-solid");
//     i.classList.add("fa-x");
//     cell.appendChild(i);

// }


//Factories
const Player = (sign) => {

    const getSign = sign;

    return { getSign };
};

const x = Player('x')
const o = Player('o')
console.log(x.getSign)
console.log(o.getSign)



//Module GAME BOARD
const gameBoard = (() => {
    
    const board = []

    // message change 


 
 


    return {  };

})();


//Module Display Controller
const displayController = (() => {


    // x display touch
    // o display touch 
    // clear display

    let isTurnX = true;
    let bothPlayerSignCount = 0;
    let isContinue = true;


    



    const gameboardCells = document.querySelectorAll(".gameboard-cell");

    // console.log(typeof(gameboardCells))

    document.querySelector(".restart-btn").addEventListener('click', clearSign => {
        gameboardCells.forEach((cell) => {
            cell.textContent = "";
            cell.classList.remove('clicked');
            isTurnX = true;
            bothPlayerSignCount = 0;
            isContinue = true;
            console.log("press")
            console.log(cell);
        })
        console.log(gameboardCells)
    })










        gameboardCells.forEach((gameboardCell) => {



            gameboardCell.addEventListener('click', () => {
    
    
                // console.log(gameboardCell);
    
                if (!gameboardCell.classList.contains('clicked') && isContinue) {


                    console.log("iscontinue",isContinue);





    
                    console.log('SIgn', bothPlayerSignCount )
    
                    gameboardCell.classList.add("clicked")
                    console.log(gameboardCell);
                    
    
    
                    if (isTurnX) {
                        displaySign(gameboardCell, x.getSign);
                        isTurnX = false;
                        console.log(isTurnX)
                    } else {
                        displaySign(gameboardCell, o.getSign);
                        isTurnX = true;
                        console.log(isTurnX)
                    }
    
                    bothPlayerSignCount++;
    
    
                    let currentPlayerSign = !isTurnX ? x.getSign : o.getSign;
    
                    if (bothPlayerSignCount > 4) {
                        if (checkWin(currentPlayerSign)) {
                            console.log(currentPlayerSign, `WINNER`)
    
                            isContinue = false;
                            console.log(isContinue)
    
                        } else if (bothPlayerSignCount == 9) {
                            console.log("DRAW!!!")
    
                            isContinue = false;
                        }
                    } 
    
    
                    
                }
    
    
            
    
       

        
            });
        });
    


    


    
    // console.log(bothPlayerSignCount);




    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWin = (currentPlayerSign) => {
        return winCombinations.some(combination => {
            return combination.every(index => {
                return gameboardCells[index].textContent.includes(currentPlayerSign)
            })
        })
    }





    const displaySign = (cell, sign) => {
        // const i = document.createElement('i');
        // i.classList.add("fa-solid");
        // i.classList.add("fa-x");
        // cell.appendChild(i);

        cell.textContent = sign
    
    }
    



    return { gameboardCells }

})();



// function displayX(cell) {
//     const i = document.createElement('i');
//     i.classList.add("fa-solid");
//     i.classList.add("fa-x");
//     cell.appendChild(i);

// }




// const gameBoard = (() => {
    
//     const gameboardCells = document.querySelectorAll(".gameboard-cell");


//     const reset = () => {
//         gameboardCells.forEach((gameboardCell) => (gameboardCell = ""));
//     };
    
//     const checkWin = () => {};

//     const checkDraw = () => {};

//     return {};

// })();



// const displayControl = (() => {
//     const gameboardCells = document.querySelectorAll(".gameboard-cell");

//     gameboardCells.forEach((gameboardCell) => {

//         gameboardCell.addEventListener("click", (e) => {
//             if (gameboardCell.classList.contains("x")) {
//                 e.target.textContent = "X";
//             } else if (gameboardCell.classList.contains("o")) {
//                 e.target.textContent = "O";
//             } 
//         });
        
//     });


//     const reset = () => {
//         gameboardCells.forEach((gameboardCell) => {
//             gameboardCell.textContent = "";
//         });
//     };


//     return { reset };

// })();






// const gameControl = (() => {
//     const playerX = player("X");
//     const playerO = player("O");
// })();


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

    return {};

})();


//Module Display Controller
const displayController = (() => {


    // x display touch
    // o display touch 
    // clear display





    const gameboardCells = document.querySelectorAll(".gameboard-cell");

    let isTurnX = true;




    gameboardCells.forEach((gameboardCell) => {

        gameboardCell.addEventListener('click', () => {


            // console.log(gameboardCell);

            

            if (!gameboardCell.classList.contains('clicked')  ) {

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
                
            }

            
    
        });
    });






    const displaySign = (cell, sign) => {
        // const i = document.createElement('i');
        // i.classList.add("fa-solid");
        // i.classList.add("fa-x");
        // cell.appendChild(i);

        cell.textContent = sign
    
    }
    



    return {}

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


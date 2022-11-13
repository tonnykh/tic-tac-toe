const Player = (sign) => {
    const getSign = sign;
    return { getSign };
};


const displayController = (() => {

    const x = Player('X')
    const o = Player('O')

    let isTurnX = true;
    let bothPlayerSignCount = 0;
    let isContinue = true;

    let messageDisplay = document.querySelector(".message")
    messageDisplay.textContent = `Player X's turn`

    const gameboardCells = document.querySelectorAll(".gameboard-cell");

    document.querySelector(".restart-btn").addEventListener('click', clearSign => {
        gameboardCells.forEach((cell) => {
            cell.textContent = "";
            cell.classList.remove('clicked');
            isTurnX = true;
            bothPlayerSignCount = 0;
            isContinue = true;
            messageDisplay.textContent = `Player X's turn`
        })
    })

    gameboardCells.forEach((gameboardCell) => {

        gameboardCell.addEventListener('click', () => {
        
            if (!gameboardCell.classList.contains('clicked') && isContinue) {
    
                gameboardCell.classList.add("clicked")
                    
                if (isTurnX) {
                    displaySign(gameboardCell, x.getSign);
                    messageDisplayUpdate(o.getSign)
                    isTurnX = false;
                } else {
                    displaySign(gameboardCell, o.getSign);
                    messageDisplayUpdate(x.getSign)
                    isTurnX = true;
                }
    
                bothPlayerSignCount++;
    
                let currentPlayerSign = !isTurnX ? x.getSign : o.getSign;
    
                if (bothPlayerSignCount > 4) {
                    if (checkWin(currentPlayerSign)) {
                        messageDisplay.textContent = `Player ${currentPlayerSign} has WON! 🎉`
                        isContinue = false;    
                    } else if (bothPlayerSignCount == 9) {
                        messageDisplay.textContent = `It's a draw!🤝`
                        isContinue = false;
                    }
                }     
            }        
        });
    });

    const messageDisplayUpdate = (currentPlayerSign) => {
        messageDisplay.textContent = `Player ${currentPlayerSign}'s turn`
    }

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
        cell.textContent = sign
    }
})();
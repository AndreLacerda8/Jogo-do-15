const Components = {
    spaces: document.querySelectorAll('.board div'),
    pieces: document.querySelectorAll('.board div span')
}

const Initializes = {
    initialModels: [
        [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 1, 2, ''],
        [1, 7, 3, 12, 5, 2, 6, 4, 9, 11, 14, 8, 13, 10, 15, ''],
        [6, 1, 3, 4, 5, 2, 11, 7, 13, 9, 15, 8, 10, 14, 12, ''],
        [2, 1, 4, 8, 5, 3, 7, 12, 9, 6, 10, 15, 13, 14, 11, ''],
        [1, 15, 2, 9, 6, 8, 4, 3, 14, 10, 12, 7, 5, 13, 11, ''],
        [5, 1, 2, 4, 14, 3, 8, 12, 9, 13, 7, 15, 10, 6, 11, ''],
        [6, 4, 1, 10, 9, 7, 5, 8, 14, 11, 12, 15, 3, 13, 2, ''],
        [2, 5, 1, 7, 10, 9, 6, 3, 13, 11, 4, 15, 14, 12, 8, ''],
        [5, 1, 2, 3, 11, 10, 4, 7, 14, 6, 8, 12, 9, 13, 15, ''],
        [11, 5, 1, 12, 8, 10, 7, 4, 13, 3, 2, 15, 9, 6, 14, '']
    ],
    
    random: Math.floor(Math.random() * (11 - 1)),
    
    initializeBoard(){
        Components.pieces.forEach((piece, index) => {
            piece.innerText = this.initialModels[this.random][index]
            piece.addEventListener('click', Game.move)
        })
    },
}


const Game = {
    move(e){
        const currentPiece = e.target
        const pieceEmpty = Components.pieces[15]
        const whereIAm = currentPiece.parentNode.id
        const whereEmpty = pieceEmpty.parentNode.id
        const canMove = Game.verifyMovement(Number(whereIAm), Number(whereEmpty))
    
        if(canMove){
            const currentPosition = currentPiece.parentNode
            const emptyPosition = pieceEmpty.parentNode
            emptyPosition.replaceChild(currentPiece, pieceEmpty)
            currentPosition.appendChild(pieceEmpty)
            const win = Game.checkWin()
            if(win){
                Game.winnerMessage()
            }
        }
    },
    
    
    verifyMovement(whereIAm, whereEmpty){
        if(whereEmpty == 1 || whereEmpty == 5 || whereEmpty == 9 || whereEmpty == 13){
            return canMove = 
                whereIAm - 1 == whereEmpty ||
                whereIAm + 4 == whereEmpty ||
                whereIAm - 4 == whereEmpty
        }
        else if(whereEmpty == 4 || whereEmpty == 8 || whereEmpty == 12){
            return canMove =
                whereIAm + 1 == whereEmpty ||
                whereIAm + 4 == whereEmpty ||
                whereIAm - 4 == whereEmpty
        }
        else{
            return canMove =
                whereIAm + 1 == whereEmpty ||
                whereIAm - 1 == whereEmpty ||
                whereIAm + 4 == whereEmpty ||
                whereIAm - 4 == whereEmpty
        }
    },
    
    checkWin(){
        for(let i = 0; i <= 14; i++){
            if(Components.spaces[i].id != Components.spaces[i].innerText){
                return false
            }
        }
        return true
    },
    
    
    winnerMessage(){
        document.querySelector('.modal-winner')
            .classList.add('win')
    }

}


const Modal = {
    newGame(){
        location.reload()
    },

    back(){
        document.querySelector('.modal-winner')
            .classList.remove('win')
    }
}

window.onload = Initializes.initializeBoard()
const board = document.querySelector('.board')
const spaces = document.querySelectorAll('.board div')

const pieces = document.querySelectorAll('.board div span')
spaces.forEach(space => space.addEventListener('click', move))

function move(e){
    const currentPiece = e.target
    const pieceEmpty = pieces[15]
    const whereIAm = currentPiece.parentNode.id
    const whereEmpty = pieceEmpty.parentNode.id
    const canMove = verifyMovement(Number(whereIAm), Number(whereEmpty))

    if(canMove){
        const currentPosition = currentPiece.parentNode
        const emptyPosition = pieceEmpty.parentNode
        emptyPosition.replaceChild(currentPiece, pieceEmpty)
        currentPosition.appendChild(pieceEmpty)
        const win = checkWin()
        if(win){
            winnerMessage()
        }
    }
}


function verifyMovement(whereIAm, whereEmpty){
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
}

function checkWin(){
    for(let i = 0; i < 14; i++){
        if(spaces[i].id != spaces[i].innerText){
            return false
        }
    }
    return true
}


function winnerMessage(){
    document.querySelector('.modal-winner')
        .classList.add('win')
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
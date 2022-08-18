
let title = document.querySelector(".title");
let turn = 'x';
let squares = []
let count = 0;
function winner() {
    for(let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById("item"+i).innerHTML;
    }
    let result;
    if(squares[1] === squares[2] && squares[2] === squares[3] && squares[1] !=='') {
        result = squares[1];
    }
    else if(squares[4] === squares[5] && squares[5] === squares[6] && squares[4] !=='') {
        result = squares[4];
    }
    else if(squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !=='') {
        result = squares[7];
    }
    else if(squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !=='') {
        result = squares[1];
    }
    else if(squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !=='') {
        result = squares[2];
    }
    else if(squares[3] === squares[6] && squares[6] === squares[9] && squares[3] !=='') {
        result = squares[3];
    }
    else if(squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !=='') {
        result = squares[1];
    }
    else if(squares[3] === squares[5] && squares[5] === squares[7] && squares[3] !=='') {
        result = squares[3];
    }
    else{
        count++;
    }
    
    return result;
    
}

function game(id) {
    let element = document.getElementById(id);

    if(turn === 'x' && element.innerHTML === "") {
        element.innerHTML = "X";
        turn = 'o';
        title.innerHTML = "O";
        document.getElementById(id).style.background = '#000'
    }
    else if(turn === 'o' && element.innerHTML === "") {
        element.innerHTML = "O";
        turn = 'x';
        title.innerHTML = "X";
        document.getElementById(id).style.background = 'brown'
    }
    let win = winner();
    let c = '';

    if(win) {
        c += '.'
        setInterval(function () {
            title.innerHTML = `${win} winner`+c
            if(c === '...') {
                location.reload();
            }
            c += '.'

        },1000)
        
    }
    if(!win && count === 9) {
        c += '.'
        setInterval(function () {
            title.innerHTML = `Game Duplicated <br>
            try again`+c
            if(c === '...') {
                location.reload();
            }
            c += '.'

        },1000)

        count = 0;

    }

    
}
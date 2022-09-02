const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const windowResult = document.getElementById('winner-wrapper');
const buttonClose = document.getElementById('button-close');

area.addEventListener('click', e => {
    if (e.target.className = 'case') {
        if (e.target.innerHTML != 'X' && e.target.innerHTML != '0') {
            move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
            move += 1;
            check();
        }
    }
})

const check = () => {
    const cases = document.getElementsByClassName('case');
    const array = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (i = 0; i < array.length; i += 1){
        if (cases[array[i][0]].innerHTML == 'X' && cases[array[i][1]].innerHTML == 'X' && cases[array[i][2]].innerHTML == 'X'){
            result = 'X';
            return showWinner(result);
        } else if (cases[array[i][0]].innerHTML == '0' && cases[array[i][1]].innerHTML == '0' && cases[array[i][2]].innerHTML == '0'){
            result = '0';
            return showWinner(result);
        }
    }
    if (move === 9){
        showWinner('Friendship');
    }
}

const showWinner = player => {
    contentWrapper.innerHTML = `Winner: ${player}!`;
    windowResult.style.display = 'block';
}

const closeWindow = () => {
    windowResult.style.display = 'none'; 
    location.reload();
}

buttonClose.addEventListener('click', closeWindow);
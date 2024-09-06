let countX = 0, countY = 0;

function xCounterPlus(){
    document.getElementById('X').innerHTML = 0;
    countX++;
    document.getElementById('X').innerHTML = countX;
}

function xCounterMines(){
    document.getElementById('X').innerHTML = 0;
    countX--;
    document.getElementById('X').innerHTML = countX;
}

function yCounterPlus(){
    document.getElementById('Y').innerHTML = 0;
    countY++;
    document.getElementById('Y').innerHTML = countY;
}

function yCounterMines(){
    document.getElementById('Y').innerHTML = 0;
    countY--;
    document.getElementById('Y').innerHTML = countY;
}

function plusSign(){
    document.getElementById('theType').innerHTML = '+';
}

function minesSign(){
    document.getElementById('theType').innerHTML = '-';
}

function multiSign(){
    document.getElementById('theType').innerHTML = '*';
}

function divSign(){
    document.getElementById('theType').innerHTML = '/';
}

function equal(){
    switch(document.getElementById('theType').innerHTML){
        case '+': document.getElementById('result').innerHTML = +document.getElementById('X').innerHTML + +document.getElementById('Y').innerHTML; break;
        case '-': document.getElementById('result').innerHTML = document.getElementById('X').innerHTML - document.getElementById('Y').innerHTML; break;
        case '*': document.getElementById('result').innerHTML = document.getElementById('X').innerHTML * document.getElementById('Y').innerHTML; break;
        case '/': document.getElementById('result').innerHTML = document.getElementById('X').innerHTML / document.getElementById('Y').innerHTML; break;
        default: document.getElementById('result').innerHTML = 'Error'; break;
    }
}

function reset(){
    window.location.reload();
}
function urlBuilder(number){}

let card = CardManager(urlBuilder);
let board = new BoardManager("Board", 50, card)
let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');

for (let i = 4; i < 11; i+=2) {

    let quantiacartas = i*i;
    let opção = createElement('option');

    opção.value = quantiacartas;
    opção.innerHTML = quantiacartas;

    select.appendChild(opção);
}

start.addEventListener('click',() => {
    menu.classList.add('hidde');
    board.node.classList.remove('hidde');
    board.fill(select.value);
});

//comando de desenvolvedor
start.click();
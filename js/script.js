// Funzione per la creazione dei quadrati nella griglia
function createSquare() {
    // currentElement contiene come valore il DIV creato
    let currentElement = document.createElement('div');

    // Assegnazione della classe square all'elemento creato
    currentElement.classList.add('square');

    // Restituisco il quadrato contenuto nella variabile sopra
    return currentElement;
}

// Funzione per il controllo dei quadrati e l'assegnazione della classe clicked-bomb o per l'incremento dello score
function checkSquares() {
    // console.log(this.innerText);

    if (gameOver) {
        return
    }
    let squareNumber = parseInt(this.innerText);
    if (bombList.includes(squareNumber)) {
        this.classList.add("clicked-bomb");
        this.innerHTML = '<img src="https://minesweeper.us/media/bomba.png" />';
        this.removeEventListener("click", checkSquares);

        alert(`Hai perso con un punteggio di ${score}`)
        gameOver = true;
    }

    else {
        this.classList.add("clicked-azure");
        score++;
    }

    this.removeEventListener("click", checkSquares);
    document.getElementById("score").innerText = `SCORE: ${score}`;

    if (score === totalCells - totalBombs) {
        alert("Che fortuna...!");
        gameOver = true;
    }
}

// Dichiarazione variabili
let bombList = [];
const totalCells = 100;
const totalBombs = 16;
let score = 0;
let gameOver = false;

// Funzione per la generazione delle bombe che richiameremo al click del bottone
function bombsGenerate() {

    bombList = [];

    // WHILE per la creazione randomica dei delle bombe in determinati quadratini
    while (bombList.length < totalBombs) {
        let number = Math.floor(Math.random() * totalCells + 1);
        if (!bombList.includes(number)) {
            bombList.push(number);
        }
    }
}

// Recupero il pulsante presente nell'header
const btn = document.getElementById("start");

// Recupero l'elemento che conterrà la mia griglia
const grid = document.getElementById("grid")

// Diamo l'evento click al pulsante
btn.addEventListener("click", function () {

    grid.innerHTML = "";
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = "SCORE:";

    bombsGenerate();

    console.log(bombList);
    // Ciclo FOR per creare una griglia 10x10
    for (i = 0; i < 100; i++) {

        // richiamo la funzione per la creazione del quadrato
        let currentSquare = createSquare();

        // Evento click sul singolo quadrato
        currentSquare.addEventListener("click", checkSquares)


        // Inseriamo un numero progressivo
        currentSquare.innerText = i + 1;
        grid.append(currentSquare);

    }
})
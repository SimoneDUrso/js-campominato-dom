// Funzione per la creazione dei quadrati nella griglia
function createSquare() {
    // currentElement contiene come valore il DIV creato
    let currentElement = document.createElement('div');

    // Assegnazione della classe square all'elemento creato
    currentElement.classList.add('square');

    // Restituisco il quadrato contenuto nella variabile sopra
    return currentElement;

}

// Recupero il pulsante presente nell'header
const btn = document.getElementById("start");

// Recupero l'elemento che conterrà la mia griglia
const grid = document.getElementById("grid")

// Diamo l'evento click al pulsante
btn.addEventListener("click", function () {

    grid.innerHTML = "";
    // Ciclo FOR per creare una griglia 10x10
    for (i = 0; i < 100; i++) {

        // richiamo la funzione per la creazione del quadrato
        let currentSquare = createSquare();

        // Evento click sul singolo quadrato
        currentSquare.addEventListener("click", function () {
            this.classList.add("clicked-azure")
            console.log(currentSquare.innerText);
        });


        // Inseriamo un numero progressivo
        currentSquare.innerText = i + 1;
        grid.append(currentSquare);

    }
})
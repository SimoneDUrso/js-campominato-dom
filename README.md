Ciao ragazzi,
Esercizio di oggi: *Griglia Campo Minato*
nome repo: *js-campominato-grid*

*Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.

Numero di push: 15 circa

*Bonus* (farlo in una cartella bonus)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

*Consigli del giorno:*
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

<!-- SCOMPOSIZIONE PROBLEMA -->

1 - Creiamo una funzione per la creazione dei quadrati;
2 - Recuperiamo il pulsante HTML sul JS;
3 - Recuperiamo la griglia HTML sul JS;
4 - Assegniamo l'evento click al pulsante;
5 - Ciclo for che cicla 100 volte;
6 - Creiamo il singolo quadrato richiamando la funzione iniziale;
7 - Aggiungiamo EventListener al quadrato appena creato;
8 - Aggiungiamo una classe per colorare il singolo quadrato al click;
9 - Iniettiamo all'interno dei quadrati il numero progressivo;
10 - Appendiamo i nosti quadrati alla griglia;
11 - Creiamo la generazione di 16 numeri casuali che corrisponderanno alle bombe;
12 - Creiamo un array vuoto[] "bombList";
13 - Creiamo una variabile "score" per il punteggio settata a zero;
14 - Creiamo una funzione per l'incremento della variabile score; 

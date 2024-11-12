## Consegna Snack 1

- Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo oppure in console la bici con peso minore.



### Dati

- Array di oggetti
    - oggetto bici1: nome, peso
    - ...

### Ragionamento Logico

Definire variabile compara come 9999

Per ogni oggetto dell'array
    - Acquisisci il peso dell'oggetto e salva in variabile
        - Leggi oggetto 0 [peso]
    - SE il peso in intero NON supera compara
        - peso = compara
    - Ritorna compara

## Consegna Snack 2

- Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


### Dati

- Array di squadre di calcio (oggetti)

### Ragionamento Logico

Creo una funzione che generi numeri random tra min e max

Riempio i punti e falli con questa funzione

Creo una copia dell'array e
    PER OGNI elemento dell'array    
        Cancella nome 


## Consegna Snack 3

- Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS

### Dati

### Svolgimento


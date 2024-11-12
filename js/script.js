
let bikeArray = [
    {nome: "Bunny Bike", peso: 20},
    {nome: "James Bike", peso: 65},
    {nome: "Master Bike", peso: 16},
    {nome: "Jimmy Bike", peso: 42},
    {nome: "Josue Bike", peso: 25}
]

let compara = 9999;

let itGO;
let itGooooo;


/**
 * Prendi un array di oggetti e una key e restituisce l'oggetto con la key minore (SOLO NUMERI) 
 *
 * @param {array di oggetti} array
 * @returns {object}
 */
const searchLightest = (array, key) => {
    

    for (let i = 0; i < array.length; i++){
        const weight = array[i][key];
        if (weight > compara === false){
            compara = weight;
            result = array[i];
        }
    }

    return result;

}

const lightestBike = searchLightest(bikeArray, "peso")
console.log(lightestBike);

// ----------------------------------------------------------------------------------------

// SNACK 2

const footBallTeams = [
    {nome: "Rubentus", punti: 0, falliSub: 0},
    {nome: "InterRacial", punti: 0, falliSub: 0},
    {nome: "Brazil", punti: 0, falliSub: 0},
    {nome: "Ateam", punti: 0, falliSub: 0},
    {nome: "Bteam", punti: 0, falliSub: 0}
]

const randomInteger = (min, max) =>{
    let result = Math.floor(Math.random() * (max - min + 1) + min)
    return result;
}

for (let i = 0; i < footBallTeams.length; i++){
    footBallTeams[i]["punti"] = randomInteger(0, 50);
    footBallTeams[i]["falliSub"] = randomInteger(0, 50);
}

const resultArray = footBallTeams.slice();

for (let i = 0; i < resultArray.length; i++){
    delete resultArray[i]["nome"];
}

console.log(resultArray);

//---------------------------------------------------------------------------------------------

const arrayStart = [1,49,2,5,67,51,3,42,45,4,12];

const findBetween = (array, start, end) => {
    let resultArr = [];
    let j = 0;
    
    for (let i = 0; i <= end; i++){
        if (j < start){
            j++;
        } else{
            resultArr.push(array[i])
        }
    }
    return resultArr;
}

const resultArray1 = findBetween(arrayStart, 2, 6);
console.log(resultArray1);


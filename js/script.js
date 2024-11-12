
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


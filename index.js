/**
 * Ordena un array de objetos por la propiedad indicada.
 * 
 * @param {array} array 
 * @param {string} propiedad 
 * @returns {array}
 */
const ordenarPorPropiedad = (array, propiedad) => {
    array.sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1;
        }
        if (a[propiedad] > b[propiedad]) {
            return 1;
        }
        return 0;
    });
    return array;
};

let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "María", edad: 28 }
];

console.log(ordenarPorPropiedad(personas, 'nombre'));

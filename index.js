function findMinAndRemove(array){
    let min = array[0];
    let minInd = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minInd = i;
        }
    }
    array.splice(minInd, 1)
    return min;
}

console.log(findMinAndRemove([4, 5, 3, 8]))

function selectionSort(array){
    let sorted = [];
    let min;
    while(array.length > 0) {
        min = findMinAndRemove(array);
        sorted.push(min)
    }
    return sorted;
}

console.log(selectionSort([4, 5, 2, 8, -3, 2]))

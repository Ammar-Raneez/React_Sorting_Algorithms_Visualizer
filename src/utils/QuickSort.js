export const QuickSort = (array, low, high) => {  
    if (low < high) {
        let partitionIndex = partition(array, low, high);
        QuickSort(array, low, partitionIndex - 1);
        QuickSort(array, partitionIndex + 1, high);
    }
    return array;
}

const swap = (array, i , j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const partition = (array, low, high) => {
    let pivot = array[high];

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, high);
    return i + 1;
}
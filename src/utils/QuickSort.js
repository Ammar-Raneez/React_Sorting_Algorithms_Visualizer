export const QuickSort = (array, low, high) => {  
    if (low < high) {
        // pi is partitioning index, arr[p]
        // is now at right place
        let partitionIndex = partition(array, low, high);

        // Separately sort elements before
        // partition and after partition
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

/* 
    This function takes last element as pivot, places
    the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
    to left of pivot and all greater elements to right
    of pivot 
*/
const partition = (array, low, high) => {
    let pivot = array[high];

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller
        // than the pivot
        if (array[j] < pivot) {
            // Increment index of
            // smaller element
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, high);
    return i + 1;
}
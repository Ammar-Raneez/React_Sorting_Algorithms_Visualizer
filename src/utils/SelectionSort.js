export const SelectionSort = array => {
    // One by one move boundary of unsorted subarray
    for (let i = 0; i < array.length - 1; i++) {
        // Find the minimum element in unsorted array
        let minIndex = i;

        // Swap the found minimum element with the first element
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                swap(array, minIndex, j)
            }
        }
    }

    return array;
}

const swap = (array, minIndex, j) => {
    let temp = array[minIndex];
    array[minIndex] = array[j];
    array[j] = temp;
}
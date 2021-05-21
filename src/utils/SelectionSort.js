export const SelectionSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

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
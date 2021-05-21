export const BubbleSort = array => {
    // bubble the values through the array (compare two and swap those two)
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length - i - 1; j++) {
            if (array[i] > array[j]) {
                swap(array, i, j);
            }
        }
    }

    return array;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
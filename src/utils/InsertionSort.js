export const InsertionSort = array => {
    for (let i = 0; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        /* 
            Move elements of array[0..i-1], that are
            greater than key, to one position ahead
            of their current position 
        */
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }

    return array;
}
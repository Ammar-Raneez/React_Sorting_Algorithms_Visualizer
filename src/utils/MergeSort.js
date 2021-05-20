export const MergeSort = array => {
    // no need sorting
    if (array.length === 1) {
        return array;
    }
    // split array into two sections, till theres only one element on each half
    const middleIndex = Math.floor(array.length / 2);
    const firstHalf = MergeSort(array.slice(0, middleIndex));
    const secondHalf = MergeSort(array.slice(middleIndex));

    // auxillary array
    const sortedArray = [];
    let i = 0;
    let j = 0;

    // compare each element linearly and push to array
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++])
        } else {
            sortedArray.push(secondHalf[j++])
        }
    }

    // push any remaining elements
    while (i < firstHalf.length) {
        sortedArray.push(firstHalf[i++]);
    }
    while (j < secondHalf.length) {
        sortedArray.push(secondHalf[j++]);
    }

    return sortedArray;
}
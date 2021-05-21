export const HeapSort = array => {
    // Build heap (rearrange array)
    for (let i = array.length/2 - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    // One by one extract an element from heap
    for (let i = array.length - 1; i > 0; i--) {
        // Move current root to end
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        // call max heapify on the reduced heap
        heapify(array, i, 0);
    }

    return array;
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
const heapify = (array, n, i) => {
    let largest = i;        // Initialize largest as root
    let left = 2 * i + 1;   // left = 2*i + 1
    let right = 2 * i + 2;  // right = 2*i + 2

    // If left child is larger than root
    if (left < n && array[left] > array[largest])
        largest = left;

    // If right child is larger than largest so far
    if (right < n && array[right] > array[largest])
        largest = right;

    // If largest is not root
    if (largest !== i) {
        let swap = array[i];
        array[i] = array[largest];
        array[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(array, n, largest);
    }
}
# Merge Sort
Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See the following C implementation for details.

## Pseudocode
```
MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = l+ (r-l)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)
```
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Merge-Sort-Tutorial.png" />


# Quick Sort
QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 
1. Always pick first element as pivot.
2. Always pick last element as pivot (implemented below)
3. Pick a random element as pivot.
4. Pick median as pivot.

The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

## Psuedocode
```
quickSort(arr[], low, high) {
    if (low < high) {
        *pi is partitioning index, arr[pi] is now at right place*
        pi = partition(arr, low, high);

        *Before pi*
        quickSort(arr, low, pi - 1);
        *After pi*
        quickSort(arr, pi + 1, high); 
    }
}
```

### Partition Pseudocode
```
partition (arr[], low, high) {
    *pivot (Element to be placed at right position)*
    pivot = arr[high]

    *Index of smaller element and indicates the right position of pivot found so far*
    i = (low - 1)

    *If current element is smaller than the pivot*
    for (j = low; j <= high- 1; j++) {
        if (arr[j] < pivot) {
            *increment index of smaller element*
            i++;
            swap arr[i] and arr[j]
        }
    }
    swap arr[i + 1] and arr[high])
    return (i + 1)
}
```

### Partition Illustration
```
arr[] = {10, 80, 30, 90, 40, 50, 70}
Indexes:  0   1   2   3   4   5   6 

low = 0, high =  6, pivot = arr[h] = 70
Initialize index of smaller element, i = -1

*Traverse elements from j = low to high-1*
j = 0 : *Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])*
i = 0 
*No change as i and j are same*
arr[] = {10, 80, 30, 90, 40, 50, 70}

j = 1 : Since arr[j] > pivot, do nothing
*No change in i and arr[]*

j = 2 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 1
arr[] = {10, 30, 80, 90, 40, 50, 70} // We swap 80 and 30 

j = 3 : Since arr[j] > pivot, do nothing
*No change in i and arr[]*

j = 4 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 2
arr[] = {10, 30, 40, 90, 80, 50, 70} *80 and 40 Swapped*
j = 5 : Since arr[j] <= pivot, do i++ and swap arr[i] with arr[j] 
i = 3 
arr[] = {10, 30, 40, 50, 80, 90, 70} *90 and 50 Swapped*

We come out of loop because j is now equal to high-1.
Finally we place pivot at correct position by swapping
arr[i+1] and arr[high] (or pivot) 
arr[] = {10, 30, 40, 50, 70, 90, 80} *80 and 70 Swapped*

Now 70 is at its correct place. All elements smaller than
70 are before it and all elements greater than 70 are after
it.
```

<img src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png" />


# Insertion Sort
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

To sort an array of size n in ascending order: 
1: Iterate from arr[1] to arr[n] over the array. 
2: Compare the current element (key) to its predecessor. 
3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png" />


# Selection Sort
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

1. The subarray which is already sorted.
2. Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

## Selection Sort Illustration
*Find the minimum element in arr[0...4] and place it at beginning*
11 25 12 22 64

*Find the minimum element in arr[1...4] and place it at beginning of arr[1...4]*
11 12 25 22 64

*Find the minimum element in arr[2...4] and place it at beginning of arr[2...4]*
11 12 22 25 64

*Find the minimum element in arr[3...4] and place it at beginning of arr[3...4]*
11 12 22 25 64 


# Bubble Sort
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

## Bubble Sort Illustration
First Pass: 
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
Second Pass: 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.
Third Pass: 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
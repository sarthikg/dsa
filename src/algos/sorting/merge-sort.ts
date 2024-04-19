function mergeSort(arr: number[]): number[] {
    function recurse(start: number, end: number): void {
        // Base Condition - If length of array is 1 or less, its already sorted, hence return as it is
        if (end - start <= 1) {
            return;
        }

        // Calculate the mid part to split the array
        const middle = start + Math.floor((end - start) / 2);

        // Sort the left & right part of arrays in-place
        recurse(start, middle);
        recurse(middle, end);

        // Create a new sorted array, created by combining the left & right arrays
        const mergedArray = mergeSortedArray(arr, start, middle, end);
        // Replace elements in the main array from the sorted array
        for (let i = start; i < end; i++) {
            arr[i] = mergedArray[i - start];
        }
    }
    recurse(0, arr.length);
    return arr;
}

function mergeSortedArray(
    arr: number[],
    start: number,
    middle: number,
    end: number,
): number[] {
    const result = [];

    // Pointers for the 2 array values
    let a = start;
    let b = middle;

    // Start with comparing, and adding values
    while (a < middle && b < end) {
        if (arr[a] < arr[b]) {
            result.push(arr[a]);
            a += 1;
        } else {
            result.push(arr[b]);
            b += 1;
        }
    }
    // Once either of the array is complete, we dump remaining values
    for (let i = a; i < middle; i++) {
        result.push(arr[i]);
    }
    for (let i = b; i < end; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(mergeSort([13, 46, 24, 52, 20, 9]));

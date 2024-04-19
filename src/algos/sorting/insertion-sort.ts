function insertionSort(arr: number[]): number[] {
    // Outer Loop - Go from the second element to the last element
    // Reasoning - Array with a single element is always sorted
    for (let i = 1; i < arr.length; i++) {
        // Store the value for internal loop
        let j = i;
        // While j > 0 && previous value > current value
        while (j > 0 && arr[j - 1] > arr[j]) {
            // Swap the values
            swap(arr, j - 1, j);
            // Move one to the left for looping
            j -= 1;
        }
    }
    // Return the resulting array
    return arr;
}

function swap(arr: number[], a: number, b: number): void {
    const value = arr[a];
    arr[a] = arr[b];
    arr[b] = value;
}

console.log(insertionSort([13, 46, 24, 52, 20, 9]));

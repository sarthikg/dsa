function bubbleSort(arr: number[]): number[] {
    // Outer Loop - Go from the first element to the second last elemnt
    // Reasoning - Once the array post the first index is sorted, the whole array is also sorted
    for (let i = 0; i < arr.length - 1; i++) {
        // Loop over the 0'th index to the last unsorted index, such that pairs can be created
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Check if the previous element is less than next
            if (arr[j] > arr[j + 1]) {
                // Swap them
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function swap(arr: number[], a: number, b: number): void {
    const value = arr[a];
    arr[a] = arr[b];
    arr[b] = value;
}

console.log(bubbleSort([13, 46, 24, 52, 20, 9]));

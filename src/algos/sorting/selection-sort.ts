function selectionSort(arr: number[]): number[] {
    // Outer Loop - Go from the first element to the second last element
    // Reasoning - Last element, being the only element will anyways be sorted
    for (let i = 0; i < arr.length - 1; i++) {
        // Assign the i'th element as the minimum current value
        let minIndex = i;
        // Loop over the i+1'th to the last element of the array to find the smallest element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the minimum element with the smallest found element
        swap(arr, i, minIndex);
    }
    // Return the resulting array
    return arr;
}

function swap(arr: number[], a: number, b: number): void {
    const value = arr[a];
    arr[a] = arr[b];
    arr[b] = value;
}

console.log(selectionSort([13, 46, 24, 52, 20, 9]));

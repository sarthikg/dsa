export default function bubble_sort(arr: number[]): void {
    // Loop n times (n -> length of array)
    for (let i = 0; i < arr.length; i++) {
        // Actual working loop (Check value with next value & swap if required)
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j+1)
            }
        }
    }
}

function swap(arr: number[], a: number, b: number): void {
    const val = arr[b]
    arr[b] = arr[a]
    arr[a] = val
}
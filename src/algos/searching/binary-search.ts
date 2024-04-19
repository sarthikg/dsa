// export default function bs_list(haystack: number[], needle: number): boolean {
//     let left = 0
//     let right = haystack.length

//     while (left < right) {
//         const center = Math.floor(left + (right - left) / 2)

//         if (haystack[center] === needle) {
//             return true
//         }
//         else if (haystack[center] > needle) {
//             right = center
//         } else {
//             left = center + 1
//         }
//     }

//     return false

// }

export default function bs_list(haystack: number[], needle: number): boolean {
    let startIndex = 0;
    let endIndex = haystack.length;

    while (startIndex < endIndex) {
        const middleIndex =
            startIndex + Math.floor((endIndex - startIndex) / 2);
        if (needle === haystack[middleIndex]) {
            return true;
        } else if (needle > haystack[middleIndex]) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex;
        }
    }
    return false;
}

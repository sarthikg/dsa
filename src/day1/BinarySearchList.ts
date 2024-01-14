export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0
    let right = haystack.length

    while (left < right) {
        const center = Math.floor(left + (right - left) / 2)

        if (haystack[center] === needle) {
            return true
        }
        else if (haystack[center] > needle) {
            right = center
        } else {
            left = center + 1
        }
    }

    return false

}
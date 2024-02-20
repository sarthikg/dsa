export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpLength = Math.floor(Math.sqrt(breaks.length));

    let breakIndex = 0;

    for (let i = 0; i < breaks.length; i += jumpLength) {
        if (breaks[i] === true) {
            breakIndex = i;
            break;
        }
    }

    const startIndex = breakIndex - jumpLength;

    for (let i = startIndex; i < breakIndex; i++) {
        if (breaks[i] === true) {
            return i;
        }
    }
    return -1;
}
VbL4&dF7FdovUz



8SUAbwu @ia3n

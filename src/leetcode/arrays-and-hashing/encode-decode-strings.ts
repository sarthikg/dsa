class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let result: string = "";
    for (let i = 0; i < strs.length; i++) {
      const value = strs[i];
      // For every value in the array, we add the count of elements & a delimiter before it
      // `sarthikgupta` will be appended as `12#sarthikgupta`
      result = `${result}${value.length}#${value}`;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    // Create an array to store the result
    const result: string[] = [];

    // Create a pointer to point at the current index in str
    let pointer: number = 0;
    // Perform a while loop, since pointer will be manually updated
    while (pointer < str.length) {
      // If the value is a number, we store that in a string
      if (this._isNumber(str, pointer)) {
        // String to store the number, which denotes the number of characters
        let number = "";
        // While delimiter is interacted, add the numbers in the number variable
        while (str[pointer] !== "#") {
          number = `${number}${str[pointer]}`;
          pointer += 1;
        }
        // Parse the number variable into a numeric datatype
        const count = parseInt(number);
        // Push the slice of the string in the result array
        result.push(str.slice(pointer + 1, pointer + count + 1));
        // Jump the pointer onto the supposedly next array value in string
        pointer += count + 1;
      }
    }
    return result;
  }

  _isNumber(str: string, index: number): boolean {
    return !isNaN(parseInt(str[index]));
  }
}

const solution = new Solution();
console.log(solution.encode(["neet", "code", "sarthikgupta", "dev"]));
console.log(solution.decode("4#neet4#code12#sarthikgupta3#dev"));

export function minWindow(s: string, t: string): string {
  let left = 0;
  let right = 0;

  // Create a freq currMap of t
  const targetMap = getFreqMap(t);
  // Create a rolling freq currMap with all values set to 0
  const currMap = getFreqMap(t);
  for (let key of Object.keys(currMap)) {
    currMap[key] = 0;
  }

  let minSize = Infinity;
  let minString = "";
  let matches = 0;

  while (right < s.length) {
    // Add right value to the freq currMap
    const rightEl = s[right];
    if (currMap[rightEl] !== undefined) {
      currMap[rightEl] += 1;
      if (currMap[rightEl] >= targetMap[rightEl]) {
        matches += 1;
      }
    }
    console.log(rightEl, currMap[rightEl], targetMap[rightEl], matches);
    // If matches are equal to unique keys in t
    if (matches === Object.keys(targetMap).length) {
      // Update the minSize
      if (right - left + 1 < minSize) {
        minSize = right - left + 1;
        minString = s.slice(left, right + 1);
      }
      // While there is only 1 mismatch, move the left pointer
      while (left < right) {
        const leftEl = s[left];
        if (currMap[leftEl] !== undefined) {
          if (currMap[leftEl] - 1 < targetMap[leftEl]) {
            if (matches === Object.keys(targetMap).length - 1) {
              break;
            }
            currMap[leftEl] -= 1;
            matches -= 1;
          }
        }
        left += 1;
      }
    }
    console.log(left, right);
    right += 1;
  }
  return minString;
}

function getFreqMap(t: string): Record<string, number> {
  const targetMap = {};
  for (let i = 0; i < t.length; i++) {
    if (targetMap[t[i]] === undefined) {
      targetMap[t[i]] = 1;
    } else {
      targetMap[t[i]] += 1;
    }
  }
  return targetMap;
}

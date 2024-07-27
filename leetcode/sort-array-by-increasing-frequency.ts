export function frequencySort(nums: number[]): number[] {
  const freqMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (freqMap[num] === undefined) {
      freqMap[num] = 0;
    }
    freqMap[num] += 1;
  }

  const freqArr: number[][] = [];
  const keys = Object.keys(freqMap);
  for (let i = 0; i < keys.length; i++) {
    const [key, value] = [keys[i], freqMap[keys[i]]];
    if (freqArr[value] === undefined) {
      freqArr[value] = [];
    }
    freqArr[value] = [...freqArr[value], parseInt(key)];
  }

  const result: number[] = [];
  for (let i = 0; i < freqArr.length; i++) {
    const arr = freqArr[i];
    if (!arr) {
      continue;
    }
    arr.sort((a, b) => b - a);
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < i; k++) {
        result.push(arr[j]);
      }
    }
  }

  return result;
}

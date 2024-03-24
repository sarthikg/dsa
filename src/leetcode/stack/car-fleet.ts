function carFleet(target: number, position: number[], speed: number[]): number {
  // Create an array to combine the speed & positions of the cars
  const arr: [number, number][] = [];
  for (let i = 0; i < position.length; i++) {
    arr.push([position[i], speed[i]]);
  }
  // Sort the combined elements such that positions are in increasing order
  arr.sort((a, b) => a[0] - b[0]);

  // Create a stack to store the time it takes for the cars to reach the target
  const stack: number[] = [];

  // Loop over positions of the cars in reverse, i.e. check the cars closer to target first
  for (let i = arr.length - 1; i >= 0; i--) {
    const el = arr[i];
    // Calculate the time it takes for the current car to reach the target
    const time = (target - el[0]) / el[1];
    // If the stack is empty, push the time it takes for the current car into the stack
    // Or, if the time it takes for the car closer to finish line is less than the current car, push the current car into the stack

    // Theory is, if a car which is closer to the finish line let's say take 3 seconds
    // And ideally the car behind it takes 2 seconds, this car will become a fleet with the car in front of it
    // And they will arrive as a single fleet. Its only the case when the car closer to target reaches first
    // In which case, car behind it will reach individually
    // We are technically storing unique fleets in the stack
    if (stack.at(-1) === undefined || (stack.at(-1) as number) < time) {
      stack.push(time);
    }
  }
  // Return the stack's length, which represents the number of fleets
  return stack.length;
}

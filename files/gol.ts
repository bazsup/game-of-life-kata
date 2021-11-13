export function isCellAlive(numOfNeighbors: number, isAlive: boolean): boolean {
  const isTwoOrThreeNeighbors = numOfNeighbors === 2 || numOfNeighbors === 3
  
  if (!isAlive && numOfNeighbors == 3) return false
  if (isAlive && isTwoOrThreeNeighbors) return true
  
  return false;
}

/*

    ✓ should be die when has no neighbor (3 ms)
    ✕ should be alive when has 2 neighbors (2 ms)
    ✕ a dead cell should be alive when has 3 neighbors (1 ms)
    ✓ a dead cell should still die when has 2 neighbors
*/

export function isCellAlive(numOfNeighbors: number, isAlive: boolean): boolean {
  const isTwoOrThreeNeighbors = numOfNeighbors === 2 || numOfNeighbors === 3
  
  if (!isAlive && numOfNeighbors == 3) return true
  if (isAlive && isTwoOrThreeNeighbors) return true
  
  return false;
}

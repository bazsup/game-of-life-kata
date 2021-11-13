export function isCellAlive(numOfNeighbors: number, isAlive: boolean): boolean {
  const isTwoOrThreeNeighbors = numOfNeighbors === 2 || numOfNeighbors === 3
  if (isTwoOrThreeNeighbors) return true
  
  return false;
}

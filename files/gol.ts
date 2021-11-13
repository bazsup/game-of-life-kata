export function isCellAlive(numOfNeighbors: number): boolean {
  if (numOfNeighbors === 2 || numOfNeighbors === 3) return true
  return false;
}

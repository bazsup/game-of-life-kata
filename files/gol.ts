export function isCellAlive(numOfNeighbors: number, isAlive: boolean): boolean {
  const isAliveAndHasTwoOrThreeNeighbors = isAlive && numOfNeighbors === 2 || numOfNeighbors === 3
  const isDeadAndHasThreeNeighbors = !isAlive && numOfNeighbors == 3
  
  if (isDeadAndHasThreeNeighbors) return true
  if (isAliveAndHasTwoOrThreeNeighbors) return true
  
  return false;
}

export interface Position {
  row: number;
  col: number;
}

export function getNumOfNeighbors(board: string[][], position: Position): number {
  return 1;
}

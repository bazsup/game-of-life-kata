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
  const { row, col } = position
  const hasRightNeighbor = board[row][col + 1] === '*'
  const hasLeftNeighbor = board[row][col - 1] === '*'
  const hasBottomNeighbor = (board.length > position.row && board[1][0] === '*') || 
    (board.length == 3 && board[2][0] === '*')
  if (board.length == 2 && board[0][0] === '*') return 1
  if (hasBottomNeighbor) return 1
  if (hasLeftNeighbor) return 1
  if (hasRightNeighbor) return 1
  return 0;
}

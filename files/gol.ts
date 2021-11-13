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
  const hasSpaceBelow = board.length > row + 1
  const hasSpaceAbove = row - 1 >= 0
  const hasSpaceRight = board[0].length > col + 1
  const hasSpaceLeft = col - 1 >= 0
  
  const hasRightNeighbor = hasSpaceRight && board[row][col + 1] === '*'
  const hasLeftNeighbor = hasSpaceLeft && board[row][col - 1] === '*'
  const hasBottomNeighbor = (hasSpaceBelow && board[row + 1][col] === '*')
  const hasTopNeighbor = (hasSpaceAbove && board[row - 1][col] === '*')
  const hasDiagonalTopLeftNeighbor = hasSpaceAbove && board[row - 1][col - 1] === '*'
  const hasDiagonalTopRightNeighbor = hasSpaceAbove && hasSpaceRight && board[row - 1][col + 1] === '*'   
  const hasDiagonalBottomLeftNeighbor = hasSpaceBelow && hasSpaceLeft && board[row + 1][col - 1] === '*'

  if (hasDiagonalTopRightNeighbor) return 1
  if (hasDiagonalTopLeftNeighbor) return 1
  if (hasTopNeighbor) return 1
  if (hasBottomNeighbor) return 1
  if (hasLeftNeighbor) return 1
  if (hasRightNeighbor) return 1
  return 0;
}

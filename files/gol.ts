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
  
  const aliveSymbol = '*'
  
  const hasRightNeighbor = board[row][col + 1] === aliveSymbol
  const hasLeftNeighbor = board[row][col - 1] === aliveSymbol
  const hasBottomNeighbor = (hasSpaceBelow && board[row + 1][col] === aliveSymbol)
  const hasTopNeighbor = (hasSpaceAbove && board[row - 1][col] === aliveSymbol)
  const hasDiagonalTopLeftNeighbor = hasSpaceAbove && board[row - 1][col - 1] === aliveSymbol
  const hasDiagonalTopRightNeighbor = hasSpaceAbove && hasSpaceRight && board[row - 1][col + 1] === aliveSymbol
  const hasDiagonalBottomLeftNeighbor = hasSpaceBelow && hasSpaceLeft && board[row + 1][col - 1] === aliveSymbol
  const hasDiagonalBottomRightNeighbor = hasSpaceBelow && hasSpaceRight && board[row + 1][col + 1] === aliveSymbol

  if (hasDiagonalBottomRightNeighbor) return 1
  if (hasDiagonalBottomLeftNeighbor) return 1
  if (hasDiagonalTopRightNeighbor) return 1
  if (hasDiagonalTopLeftNeighbor) return 1
  if (hasTopNeighbor) return 1
  if (hasBottomNeighbor) return 1
  if (hasLeftNeighbor) return 1
  if (hasRightNeighbor) return 1
  
  return 0;
}

import { isCellAlive, getNumOfNeighbors, gameOfLife, Position, Board } from './gol';

describe('isCellAlive', () => {
  it('an alive cell should be die when has no neighbor', () => {
    const isAlive = true
    expect(isCellAlive(0, isAlive)).toEqual(false);
  });
  
  it('an alive cell should still alive when has 2 neighbors', () => {
    const isAlive = true
    expect(isCellAlive(2, isAlive)).toEqual(true);
  });
  
  it('a dead cell should be alive when has 3 neighbors', () => {
    const isAlive = false
    expect(isCellAlive(3, isAlive)).toEqual(true);
  });
  
  it('a dead cell should still die when has 2 neighbors', () => {
    const isAlive = false
    expect(isCellAlive(2, isAlive)).toEqual(false);
  });
 
});

describe('getNumOfNeighbors', () => {
  
  it('should has no neighbor', () => {
    const board = [
      ['*']
    ];
    const position: Position = {row: 0, col: 0}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(0)
  });
  
  it('position 0, 0 should return 1 when has 1 neighbor on the right', () => {
    const board = [
      ['*', '*']
    ];
    const position: Position = {row: 0, col: 0}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 0, 2 should return 1 when has 1 neighbor on the right', () => {
    const board = [
      ['', '', '*', '*']
    ];
    const position: Position = {row: 0, col: 2}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 0, 1 should return 1 when has 1 neighbor on the left', () => {
    const board = [
      ['*', '*']
    ];
    const position: Position = {row: 0, col: 1}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 0, 2 should return 1 when has 1 neighbor on the left', () => {
    const board = [
      ['', '*', '*']
    ];
    const position: Position = {row: 0, col: 2}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 0, 0 should return 1 when has 1 neighbor on the bottom', () => {
    const board = [
      ['*'],
      ['*']
    ];
    const position: Position = {row: 0, col: 0}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 1, 0 should return 1 when has 1 neighbor on the bottom', () => {
    const board = [
      [''],
      ['*'],
      ['*'],
    ];
    const position: Position = {row: 1, col: 0}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 1, 1 should return 1 when has 1 neighbor on the bottom', () => {
    const board = [
      ['', ''],
      ['', '*'],
      ['', '*'],
    ];
    const position: Position = {row: 1, col: 1}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 1, 0 should return 1 when has 1 neighbor on the top', () => {
    const board = [
      ['*'],
      ['*'],
    ];
    const position: Position = {row: 1, col: 0}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 2, 0 should return 1 when has 1 neighbor on the top', () => {
    const board = [
      [''],
      ['*'],
      ['*']
    ];
    const position: Position = {row: 2, col: 0}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 2, 1 should return 1 when has 1 neighbor on the top', () => {
    const board = [
      ['', ''],
      ['', '*'],
      ['', '*']
    ];
    const position: Position = {row: 2, col: 1}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 1, 1 should return 1 when has 1 neighbor on diagonal top left', () => {
    const board = [
      ['*', ''],
      ['', '*'],
    ];
    const position: Position = {row: 1, col: 1}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 2, 2 should return 1 when has 1 neighbor on diagonal top left', () => {
    const board = [
      ['', '', ''],
      ['', '*', ''],
      ['', '', '*'],
    ];
    const position: Position = {row: 2, col: 2}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 1, 0 should return 1 when has 1 neighbor on diagonal top right', () => {
    const board = [
      ['', '*'],
      ['*', ''],
    ];
    const position: Position = {row: 1, col: 0}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 0, 1 should return 1 when has 1 neighbor on diagonal bottom left', () => {
    const board = [
      ['', '*'],
      ['*', ''],
    ];
    const position: Position = {row: 0, col: 1}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 0, 0 should return 1 when has 1 neighbor on diagonal bottom right', () => {
    const board = [
      ['*', ''],
      ['', '*'],
    ];
    const position: Position = {row: 0, col: 0}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(1)
  });
  
  it('position 1, 1 should return 8 when has 8 neighbors around', () => {
    const board = [
      ['*', '*', '*'],
      ['*', '*', '*'],
      ['*', '*', '*'],
    ];
    const position: Position = {row: 1, col: 1}

    const result = getNumOfNeighbors(board, position)
    
    expect(result).toEqual(8)
  });

});


const createBoard = (boardString: string): Board => {
 const rows = boardString.split('\n')
 const board = rows.map(row => {
    return row.split('')
 });
 return board
}

describe('createBoard', () => {
  it('should create a board from string', () => {
    const result = createBoard('*.\n' + '.*')
    expect(result).toBe([['*', '.'], ['.', '*']])
  });
});

describe('gameOfLife', () => {
  it.skip('horizontal line should return vertical line for next generation', () => {
    
  });
  
  it.skip('example 1', () => {
    const expectedBoard = '........\n' +
                     '...**...\n' +
                     '...***..\n' +
                     '....*...\n';

    const initialBoard = '........\n' +
                         '....*...\n' +
                         '...**...\n' +
                         '.....*..';

    const board = createBoard(initialBoard);

    expect(gameOfLife(boardSize, board)).toBe(expectedBoard);
  });
  
});
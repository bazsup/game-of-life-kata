import { isCellAlive, getNumOfNeighbors, Position } from './gol';

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

})
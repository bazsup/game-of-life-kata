import { isCellAlive } from './gol';

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
  
  
  it('should be 0 for 1x1 board', () => {
    const board = [
      ['*']
    ];

    const result = getNumOfNeighbors(board, {row: 0, col: 0})
    
    expect(result).toEqual(0)
  });

})
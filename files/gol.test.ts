import { isCellAlive } from './gol';

describe('isCellAlive', () => {
  it('should be die when has no neighbor', () => {
    const isAlive = false
    expect(isCellAlive(0, isAlive)).toEqual(false);
  });
  
  it('should be alive when has 2 neighbors', () => {
    const isAlive = false
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

import { isCellAlive } from './gol';

describe('isCellAlive', () => {
  it('should be die when has no neighbor', () => {
    expect(isCellAlive(0)).toEqual(false);
  });
  
  it('should be alive when has 2 neighbors', () => {
    expect(isCellAlive(2)).toEqual(true);
  });
  
  it('should be die when has 3 neighbors', () => {
    expect(isCellAlive(3)).toEqual(true);
  });
  
  it('a dead cell should still die when has 2 neighbors', () => {
    expect(isCellAlive(2)).toEqual(false);
  });
});

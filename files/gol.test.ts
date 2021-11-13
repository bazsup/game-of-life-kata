import { isCellAlive } from './gol';

describe('isCellAlive', () => {
  it('should be die when has no neighbor', () => {
    expect(isCellAlive()).toEqual(false);
  });
  
  it('should be alive when has two neighbors', () => {
    expect(isCellAlive(2)).toEqual(true);
  });
});

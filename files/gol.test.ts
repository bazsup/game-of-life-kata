import { isCellAlive } from './gol';

describe('isCellAlive', () => {
  it('should be die when has no number of neighbor', () => {
    expect(isCellAlive()).toEqual(false);
    
  });
});

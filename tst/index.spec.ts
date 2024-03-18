import {assert} from 'chai';
import { addition } from './index';


describe('GET /', () => {
  it('should just be a true result', () => {
    assert.equal(true, true);
  });

  it('should do proper addition', () => {
    const one = 1;
    assert.equal(addition(one), 2);
  })
});

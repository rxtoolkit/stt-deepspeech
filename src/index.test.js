import {expect} from 'chai';

import {toDeepSpeech} from './index';

describe('index', () => {
  it('should export a function', () => {
    expect(toDeepSpeech).to.be.a('function');
  });
});

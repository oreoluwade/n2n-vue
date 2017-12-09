import app from '../src/vue-instance';

describe('The Vue Instance', () => {
  it('returns a new instance of the vue class', () => {
    expect(app).toBeDefined();
    expect(app).not.toBeFalsy();
    expect(typeof app).toBe('object');
  });
});

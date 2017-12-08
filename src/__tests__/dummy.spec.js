
describe('First test suite', () => {
  it('establishes a test to make travis run properly', () => {
    const oreoluwade = { name: 'oreoluwa' };
    expect(oreoluwade).not.toBeFalsy();
    expect(typeof oreoluwade).not.toBe('string');
    expect(oreoluwade).toHaveProperty('name');
    expect(oreoluwade).not.toBe('String');
  });
});

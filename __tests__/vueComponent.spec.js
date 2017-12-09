import app from '../src/components/task-list';

describe('First vue component', () => {
  it('belongs to the vue instance', () => {
    expect(typeof app).not.toBe('string');
    expect(typeof app).toBe('object');
  });
});

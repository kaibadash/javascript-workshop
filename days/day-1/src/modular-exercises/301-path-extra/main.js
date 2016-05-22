import { describe, assert } from '../../modular-common/test-utils';
import PathResolver from '../../modular-common/PathResolver';

export default function main() {
  const pathResolver = new PathResolver({
    currentDirectory: '/a/b/c'
  });

  describe('演習: ?を修正する', () => {
    assert.ok(pathResolver.resolve('?') === '/a/b/c/foo.txt', 'Q1');
    assert.ok(pathResolver.resolve('?') === '/a/foo.txt', 'Q2');
    assert.ok(pathResolver.resolve('?') === '/a/b/d/bar.txt', 'Q3');
  });
}
const Trie = require("./trie");

test("Trie root TrieNode should not be null", () => {
  const trie = new Trie();
  expect(trie.root).not.toBe(null);
});

test("Trie root TrieNode should be initialized", () => {
  const trie = new Trie();
  expect(trie.root.endOfWord).toBe(false);
  expect(trie.root.children).toEqual(
    expect.arrayContaining(Array(26).fill(null))
  );
});

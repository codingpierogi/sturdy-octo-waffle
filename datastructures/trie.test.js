import { Trie } from "./trie";

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

test("Trie.has should return false when missing word", () => {
  const trie = new Trie();
  expect(trie.has("the")).toBe(false);
});

test("Trie.has should return true when word inserted", () => {
  const trie = new Trie();
  trie.insert("the");
  expect(trie.has("the")).toBe(true);
});

test("Trie should correctly insert and search itself", () => {
  const words = ["the", "a", "there", "answer", "any", "by", "bye", "their"];
  const trie = new Trie();
  trie.insertAll(words);
  expect(trie.has("the")).toBe(true);
  expect(trie.has("these")).toBe(false);
  expect(trie.has("their")).toBe(true);
  expect(trie.has("thaw")).toBe(false);
});

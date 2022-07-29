import { Trie } from "./trie";

xtest("Trie root TrieNode should not be null", () => {
  const trie = new Trie();
  expect(trie.root).not.toBe(null);
});

xtest("Trie root TrieNode should be initialized", () => {
  const trie = new Trie();
  expect(trie.root.endOfWord).toBe(false);
  expect(trie.root.children).toEqual(
    expect.arrayContaining(Array(26).fill(null))
  );
});

xtest("Trie.has should return false when missing word", () => {
  const trie = new Trie();
  expect(trie.has("the")).toBe(false);
});

xtest("Trie.has should return true when word inserted", () => {
  const trie = new Trie();
  trie.insert("the");
  expect(trie.has("the")).toBe(true);
});

xtest("Trie should insert and search words", () => {
  const words = ["the", "a", "there", "answer", "any", "by", "bye", "their"];
  const trie = new Trie();
  trie.insertAll(words);
  expect(trie.has("the")).toBe(true);
  expect(trie.has("these")).toBe(false);
  expect(trie.has("their")).toBe(true);
  expect(trie.has("thaw")).toBe(false);
});

test("Trie should remove word heroicomic", () => {
  const words = ["heroicomic", "hero", "herobrine"];
  const trie = new Trie();
  trie.insertAll(words);
  trie.remove("heroicomic");
  expect(trie.has("heroicomic")).toBe(false);
  expect(trie.has("hero")).toBe(true);
  expect(trie.has("herobrine")).toBe(true);
});

test("Trie should remove word hero", () => {
  const words = ["heroic", "hero", "heroine"];
  const trie = new Trie();
  trie.insertAll(words);
  trie.remove("hero");
  expect(trie.has("heroic")).toBe(true);
  expect(trie.has("hero")).toBe(false);
  expect(trie.has("heroine")).toBe(true);
});

xtest("Trie should return false when word to remove is not present", () => {
  const words = ["heroic", "hero", "heroine"];
  const trie = new Trie();
  trie.insertAll(words);
  expect(trie.remove("yoyo")).toBe(false);
});

import treeify from "treeify";

// Time Complexity: Insert/Search O(key_length)
// Space Complexity: O(alphabet_size * key_length * N)
//                   where N is the number of keys in the Trie

const ALPHABET_SIZE = 26;

class TrieNode {
  constructor(value = null) {
    this.endOfWord = false;
    this.children = Array(ALPHABET_SIZE).fill(null);
    this.value = value;
  }

  get isEmpty() {
    return this.children.every((c) => c === null);
  }

  toString() {
    const { endOfWord, value } = this;
    const children = this.children.filter((c) => c).map((c) => c.value) || [];
    return `TrieNode [endOfWord=${endOfWord}] [value=${value}] [children=${children}]`;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  has(word) {
    let currentNode = this.root;
    const letters = this.#splitLetters(word);
    for (const letter of letters) {
      const key = this.#hashKey(letter);
      if (!currentNode.children[key]) return false;
      currentNode = currentNode.children[key];
    }
    return currentNode.endOfWord;
  }

  insert(word) {
    let currentNode = this.root;
    const letters = this.#splitLetters(word);
    for (const letter of letters) {
      const key = this.#hashKey(letter);
      if (!currentNode.children[key])
        currentNode.children[key] = new TrieNode(letter);
      currentNode = currentNode.children[key];
    }
    currentNode.endOfWord = true;
  }

  remove(word, node = this.root, depth = 0) {
    if (!node) {
      return;
    }

    if (depth === word.length) {
      if (node.endOfWord) node.endOfWord = false;
      if (node.isEmpty) node = null;
      return node;
    }

    const key = this.#hashKey(word[depth]);
    node.children[key] = this.remove(word, node.children[key], depth + 1);

    if (!node.endOfWord && node.isEmpty) node = null;

    return node;
  }

  insertAll(words) {
    words.forEach((word) => this.insert(word));
  }

  toString() {
    return treeify.asTree(this.root, true);
  }

  #splitLetters(word) {
    return word.toLowerCase().split("");
  }

  #hashKey(letter) {
    return letter.charCodeAt() - "a".charCodeAt();
  }
}

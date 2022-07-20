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
}

class Trie {
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

  insertAll(words) {
    words.forEach((word) => this.insert(word));
  }

  #splitLetters(word) {
    return word.toLowerCase().split("");
  }

  #hashKey(letter) {
    return letter.charCodeAt() - "a".charCodeAt();
  }
}

module.exports = Trie;

// Time Complexity: Insert/Search O(key_length)
// Space Complexity: O(alphabet_size * key_length * N)
//                   where N is the number of keys in the Trie

const ALPHABET_SIZE = 26;

class TrieNode {
  constructor() {
    this.endOfWord = false;
    this.children = Array(ALPHABET_SIZE).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
}

module.exports = Trie;

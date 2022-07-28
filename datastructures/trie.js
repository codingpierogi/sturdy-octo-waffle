import treeify from "treeify";

import { Stack } from "./stack";

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

  remove(word) {
    let currentNode = this.root;
    const letters = this.#splitLetters(word);
    const stack = new Stack();
    //console.log("word", letters);
    for (const letter of letters) {
      const key = this.#hashKey(letter);
      console.log(`[letter=${letter}] [key=${key}]`);
      if (!currentNode.children[key]) return false;

      stack.push({ node: currentNode, key, value: currentNode.value });
      currentNode = currentNode.children[key];
    }

    while (!stack.isEmpty) {
      const { node, key, value } = stack.pop();
      console.log(`[node=${node}] [key=${key}] [value=${value}]`);

      if (node.children[key].endOfWord) node.children[key].endOfWord = false;
      if (node.children[key].children.every((c) => c === null)) {
        node.children[key] = null;
      }
    }

    return true;
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

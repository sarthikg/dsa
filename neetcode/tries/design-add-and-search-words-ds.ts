export class TrieNode {
  children: TrieNode[] = new Array(26).fill(null);
  isEnd: boolean = false;
}

export class WordDictionary {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    // Set the current node to the root
    let currNode = this.root;
    // Loop over the given word
    for (let i = 0; i < word.length; i++) {
      // Get the character index at the i'th position
      const letterIndex = word.charCodeAt(i) - "a".charCodeAt(0);
      // If the current node doesn't contain the character index, create a node
      if (!currNode.children[letterIndex]) {
        currNode.children[letterIndex] = new TrieNode();
      }
      // Update the current node to the child node
      currNode = currNode.children[letterIndex];
    }
    // Finally, update the isEnd of the current node to be true
    currNode.isEnd = true;
  }

  search(
    word: string,
    index: number = 0,
    currNode: TrieNode = this.root,
  ): boolean {
    // Base Condition - If the index is equal to the length of the word, return true if the
    // current node is an end of a word
    if (index === word.length) {
      return currNode.isEnd;
    }

    // Get the character index at the i'th position
    const letterIndex = word.charCodeAt(index) - "a".charCodeAt(0);
    // If the current character is not a "dot", check if the children contains the letterIndex
    if (word[index] !== ".") {
      if (!currNode.children[letterIndex]) {
        // If the children doesn't contain the letterIndex, word is not present, return false
        return false;
      }
      // If the children contains the letterIndex, recursively search for next word in sub tree
      return this.search(word, index + 1, currNode.children[letterIndex]);
    }

    // If the current character is a "dot", loop over each child node
    for (let i = 0; i < currNode.children.length; i++) {
      // If the current child node doesn't exist, continue
      if (!currNode.children[i]) {
        continue;
      }
      // If the current child node exists, and returns true in its search, return true
      if (this.search(word, index + 1, currNode.children[i])) {
        return true;
      }
    }
    // If none of the child nodes returned true, return false
    return false;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

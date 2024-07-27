export class TrieNode {
  children: TrieNode[] = new Array(26).fill(null);
  isEnd: boolean = false;
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
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

  search(word: string): boolean {
    // Set the current node to the root
    let currNode = this.root;
    // Loop over the given word
    for (let i = 0; i < word.length; i++) {
      // Get the character index at the i'th position
      const letterIndex = word.charCodeAt(i) - "a".charCodeAt(0);
      // If the current node doesn't contain the character index, return false
      if (!currNode.children[letterIndex]) {
        return false;
      }
      // Update the current node to the child node
      currNode = currNode.children[letterIndex];
    }
    // Finally, return the isEnd of the current node as it signifies if a word ends here
    return currNode.isEnd;
  }

  startsWith(prefix: string): boolean {
    // Set the current node to the root
    let currNode = this.root;
    // Loop over the given prefix
    for (let i = 0; i < prefix.length; i++) {
      // Get the character index at the i'th position
      const letterIndex = prefix.charCodeAt(i) - "a".charCodeAt(0);
      // If the current node doesn't contain the character index, return false
      if (!currNode.children[letterIndex]) {
        return false;
      }
      // Update the current node to the child node
      currNode = currNode.children[letterIndex];
    }
    // Finally, return true if the function didn't return false yet
    return true;
  }
}

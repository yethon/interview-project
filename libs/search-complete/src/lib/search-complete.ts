import { Search } from "@yethon-org/interfaces";

class Node {
  letter: string;
  children: Array<Node>;
  completedWord: string;

  constructor(letter: string) {
    this.letter = letter;
    this.children = [];
    this.completedWord = "";
  }

  // searches children of a node with given value
  findChild(letter: string | undefined): Node | undefined {
    let found = this.children.find((node) => {
      return node.letter === letter;
    });

    return found;
  }

  complete(word: string) {
    const searchString = word.toUpperCase();
    const chars = [...searchString];
    let parent: Node = this;
    let lastMatch: Node | undefined;

    while (chars.length) {
      let letter = chars.shift();
      let child = parent.findChild(letter);

      if (child) {
        parent = child;
        if (chars.length === 0) {
          lastMatch = child;
        }
      }
    }

    if (lastMatch) {
      return traverse(lastMatch, []);
    } else {
      return [];
    }
  }
}

const traverse = (root: Node, words: Array<string>) => {
  if (root.completedWord) words.push(root.completedWord);

  let children = root.children;

  while (children.length) {
    let child = children.pop();

    if (child) traverse(child, words);
  }
  return words;
};

// Note this class implements the Search interface
export class SearchComplete implements Search {
  root: Node;

  constructor(dictionary: Array<string>) {
    this.root = this.createTrie(dictionary);
  }

  // Creation, but could be cleaner - especially the while clause
  createTrie(words: Array<string>): Node {
    const root = new Node("");

    for (const word of words) {
      const upperWord = word.toUpperCase();
      const letters: Array<string> = [...upperWord];
      let parent = root;

      while (letters.length) {
        let letter = letters.shift();
        let child = parent.findChild(letter);

        if (!child && letter) {
          let node = new Node(letter);
          parent.children.push(node);
          if (letters.length === 0) {
            node.completedWord = word; // return the original title case words
          }
          parent = node;
        } else {
          if (child) {
            if (letters.length === 0) {
              child.completedWord = word;
            }
            parent = child;
          }
        }
      }
    }

    return root;
  }

  search(word: string): Array<string> {
    const results = this.root.complete(word);
    console.log(`resuls ::: ${JSON.stringify(results, null, 2)}`)
    return results;
  }
}

// Ways that this could be optimized:
// 1. Don't bother searching unless you have some minimum number of letters
// 2. Memoize your search results in an LRU Cache

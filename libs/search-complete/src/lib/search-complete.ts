
// TODO - create an interface lib & move
interface Search {
  search(word: string): Array<string>;
}

// Not Optional
class Node {
  letter: string;
  children: Array<Node>;

  constructor(letter: string) {
    this.letter = letter;
    this.children = [];
  }

  complete(word: string): Array<string> {
    // ... Your changes ...
    return [`${word}foo`, `${word} Bar`];
  }
}

// Note this class implements the Search interface
export class searchComplete implements Search {
  root: Node;

  constructor() {
    this.root = new Node("");
  }

  search(word: string): Array<string> {
    const results = this.root.complete(word);
    return results;
  }

}

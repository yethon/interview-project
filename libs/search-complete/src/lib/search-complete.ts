import { Search } from "@yethon-org/interfaces";

class Node {
  letter: string;
  children: Array<Node>;

  constructor(letter: string) {
    this.letter = letter;
    this.children = [];
  }

  complete(word: string): Array<string> {
    // ... Your changes ...

    return ["New York"];
  }
}

// Note this class implements the Search interface
export class SearchComplete implements Search {
  root: Node;

  constructor(dictionary: Array<string>) {
    // You'll probably be initializing the dictionary and building a
    // search structure somewhere here....
    this.root = new Node("");
  }


  search(word: string): Array<string> {
    const results = this.root.complete(word);
    return results;
  }
}

# search-complete

## Instructions

Implement an autocomplete algorithm in the `search-complete.ts` file

We've created a typed class and tests to get you started. Take note:

### Node class
  - `constructor` takes a string parameter
  - has a function called `complete` that takes a string of the word to be found and returns an array of words that all begin with the provided string.
  - `HINT` it's helpful to know when a node is the end of a word. (Eg. `WONDER` it's helpful to know that the `R` is the end of a word.)

 _The provided classes and functions are recommendations and you could remove/add/modify them. The sole exception is the `interface`, which should remain as is._

### Test Suite
  - Your code should pass the given test suite found in `search-complete.spec.ts`
  - Enhance the test suite while you work.

## Tools

This library was generated with [Nx](https://nx.dev).
## Building

Run `nx build search-complete` to build the library.

## Running unit tests

Run `nx test search-complete` to execute the unit tests via [Jest](https://jestjs.io).

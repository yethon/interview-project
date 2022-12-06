import { SearchComplete } from './search-complete';
import { validateWordList } from "./test-helpers";
import { dictionary } from "@yethon-org/dictionary";


describe('searchComplete - Your tests', () => {
  it('returns search results for word', () => {
    const words = dictionary().slice(0, 10);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("This test isn't really passing...");

    expect(validateWordList(foundWords, ["New York"])).toBe(true);
  });
});

// TODO: Your solution should make these tests pass.
describe.skip('searchComplete - Your tests', () => {
  it.skip('dataset of 10 - san', () => {
    const words = dictionary().slice(0, 10);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("san");
    const expected = ["San Antonio", "San Diego", "Dallas", "San Jose"];

    expect(validateWordList(foundWords, expected)).toBe(true);
  });

  it.skip('dataset of 10 - philadelph', () => {
    const words = dictionary().slice(0, 10);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("philadelph");
    const expected = ["Philadelphia"];

    expect(validateWordList(foundWords, expected)).toBe(true);
  });

  it.skip('dataset of 25 - d', () => {
    const words = dictionary().slice(0, 25);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("d");
    const expected = ["Dallas", "Detroit", "Denver"];

    expect(validateWordList(foundWords, expected)).toBe(true);
  });

  it.skip('dataset of 25 - d', () => {
    const words = dictionary().slice(0, 25);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("d");
    const expected = ["Dallas", "Detroit", "Denver"];

    expect(validateWordList(foundWords, expected)).toBe(true);
  });

  it.skip('dataset of 200 - bo', () => {
    const words = dictionary().slice(0, 200);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("bo");
    const expected = ["Boston", "Boise City"];

    expect(validateWordList(foundWords, expected)).toBe(true);
  });

  it.skip('dataset of 500 - sal', () => {
    const words = dictionary().slice(0, 500);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("SAL");
    const expected = ["Salt Lake City", "Salem", "Salinas"];

    expect(validateWordList(foundWords, expected)).toBe(true);
  });

  it.skip('dataset of 925 - san', () => {
    const words = dictionary().slice(0, 925);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("San");
    const expected = [
      "San Antonio",
      "San Angelo",
      "San Diego",
      "San Jose",
      "San Jacinto",
      "San Francisco",
      "San Bernardino",
      "San Buenaventura",
      "San Bruno",
      "San Mateo",
      "San Marcos",
      "San Leandro",
      "San Luis Obispo",
      "San Ramon",
      "San Rafael",
      "San Clemente",
      "San Gabriel",
      "Santa Ana",
      "Santa Clarita",
      "Santa Clara",
      "Santa Cruz",
      "Santa Rosa",
      "Santa Maria",
      "Santa Monica",
      "Santa Barbara",
      "Santa Fe",
      "Santee",
      "Sandy",
      "Sandy Springs",
      "Sanford"];

    expect(validateWordList(foundWords, expected)).toBe(true);
  });
})

describe.skip("edge cases", () => {
  test.skip("handle whole words – seattle", () => {
    const words = dictionary().slice(0, 30);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("seattle");
    const expected = ["Seattle"];

    expect(validateWordList(foundWords, expected)).toBe(true);
  });

  test.skip("handle no match", () => {
    const words = dictionary().slice(0, 30);
    const completions = new SearchComplete(words);
    const foundWords = completions.search("no match");

    expect(validateWordList(foundWords, [])).toBe(true);
  });
})


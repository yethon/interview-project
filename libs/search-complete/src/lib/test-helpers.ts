
const validateWordList = (results: Array<string>, expectedWords: Array<string>): boolean => {
  if (expectedWords.length !== results.length) return false;
  if (results.length !== [...new Set(results)].length) return false; // checking for dupes

  let found: boolean;

  found = expectedWords.reduce((acc: boolean, expectedWord: string): boolean => {
    return acc && !!results.includes(expectedWord);
  }, true);

  return found;
}

export { validateWordList };

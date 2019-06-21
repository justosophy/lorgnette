export default (
  searchTerm: string,
  searchResults: any[],
  updateEmptyResults: boolean => void,
) => () => {
  if (searchTerm.trim().length !== 0 && searchResults.length === 0) {
    updateEmptyResults(true);
  } else {
    updateEmptyResults(false);
  }
};

import { debouncedSearch } from "../data";

export default (searchTerm: string, updateSearchResults: any[] => void) => () => {
  debouncedSearch(searchTerm, updateSearchResults);
};

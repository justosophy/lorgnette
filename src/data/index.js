import * as querystring from "querystring";
import jsonp from "jsonp";

import debounce from "../tooling/debounce";

const doSearch = async (
  searchTerm: string = "",
  updateSearchResults: Function
) => {
  const search = searchTerm.trim();
  if (search.length === 0) {
    return;
  }
 
  const url = "https://www.flickr.com/services/feeds/photos_public.gne";

  const obj = {
    format: "json",
    tags: search
  };
  const q = querystring.encode(obj);

  try {
    jsonp(
      url + "?" + q,
      { name: "jsonFlickrFeed" },
      function(err, data) {
        if (err) {
          updateSearchResults([]);
          return;
        }
        updateSearchResults(data.items);
      },
      { timeout: 10000 }
    );
  } catch (e) {
    updateSearchResults([]);
  }
};

const debouncedSearch = debounce(doSearch, 250);

export { debouncedSearch };

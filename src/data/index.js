import * as querystring from 'querystring';
import jsonp from 'jsonp';
import type {
  Result, Annotation, ApiResponse, SearchRecord,
} from './types';

import { apiResponseDecoder } from './decoder';
import debounce from '../tooling/debounce';

type ApiResult = Result<Annotation, ApiResponse>;

const mapApiResponseToSearchRecords = (apiResponse: ApiResponse) => {
  const records: SearchRecord[] = apiResponse.items.map(r => ({
    author: r.author,
    author_id: r.author_id,
    date_taken: r.date_taken,
    link: r.link,
    tags: r.tags.split(' '),
    thumbnail: r.media.m,
    title: r.title,
  }));
  return records;
};

const parseSearchResults = (response, updateSearchResults) => {
  /* eslint-disable no-underscore-dangle */
  const result: ApiResult = apiResponseDecoder(response)._r;
  /* eslint-enable no-underscore-dangle */

  if (result.type === 'Ok') {
    const correctApiResponse: ApiResponse = result.value;
    const searchRecords: SearchRecord[] = mapApiResponseToSearchRecords(
      correctApiResponse,
    );
    updateSearchResults(searchRecords);
  } else {
    updateSearchResults([]);
  }
};

const doSearch = async (
  searchTerm: string = '',
  updateSearchResults: Function,
) => {
  const search = searchTerm.trim();
  if (search.length === 0) {
    return;
  }

  const url = 'https://www.flickr.com/services/feeds/photos_public.gne';

  const obj = {
    format: 'json',
    tags: search,
  };
  const q = querystring.encode(obj);

  try {
    jsonp(
      `${url}?${q}`,
      { name: 'jsonFlickrFeed' },
      (err, data) => {
        if (err) {
          updateSearchResults([]);
          return;
        }
        parseSearchResults(data, updateSearchResults);
        // updateSearchResults(data.items);
      },
      { timeout: 10000 },
    );
  } catch (e) {
    updateSearchResults([]);
  }
};

const debouncedSearch = debounce(doSearch, 250);

export { debouncedSearch };

// @flow

import React, { useEffect, useState } from "react";

import classnames from "classnames";

import { parse as parseDate, format as formatDate } from "date-fns";

import "./App.css";

import { debouncedSearch } from "./data";

import SearchInput from "./components/SearchInput";

function App() {
  const [searchTerm, updateSearchTerm] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  const [emptyResults, updateEmptyResults] = useState(false);

  useEffect(() => {
    debouncedSearch(searchTerm, updateSearchResults);
  }, [searchTerm]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (searchTerm.trim().length !== 0 && searchResults.length === 0) {
      console.log("bad result", { searchResults });
      updateEmptyResults(true);
    } else {
      updateEmptyResults(false);
    }
  }, [searchResults]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div className="App">
      <header
        className={classnames("App-header", {
          "App-header-results": searchResults.length > 0
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="App-logo"
        >
          <path
            fill="hsla(220, 13%, 5%, 0.9)"
            d="M11 5C9.032 5 7.46 6.44 7.125 8.313c-1.89.476-3.53 1.705-4.25 3.656h-.03L.718 17.936C.265 18.863 0 19.904 0 21c0 3.854 3.146 7 7 7 3.472 0 6.365-2.552 6.906-5.875.543.535 1.28.875 2.094.875.814 0 1.55-.34 2.094-.875C18.634 25.448 21.528 28 25 28c3.854 0 7-3.146 7-7 0-.974-.2-1.906-.563-2.75l-2.28-6.375-.032-.03v-.033c-.73-1.77-2.348-3.012-4.25-3.5C24.54 6.442 22.968 5 21 5c-1.857 0-3.362 1.285-3.813 3h-2.375c-.45-1.715-1.955-3-3.812-3zm0 2c1.19 0 2 .81 2 2v1h6V9c0-1.19.81-2 2-2s2 .81 2 2v.906l.906.094c1.486.156 2.766 1.192 3.344 2.53.01.022.022.042.03.064l.75 2.125c-.918-.446-1.944-.72-3.03-.72-2.924 0-5.425 1.817-6.47 4.375C17.996 17.545 17.054 17 16 17c-1.053 0-1.995.544-2.53 1.375C12.424 15.817 9.923 14 7 14c-1.072 0-2.09.253-3 .688l.75-2.032v-.03c.58-1.55 1.808-2.464 3.344-2.626L9 9.906V9c0-1.19.81-2 2-2zm-4 9c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5c0-.708.175-1.36.438-1.97.016-.037.013-.086.03-.124C3.26 17.192 4.98 16 7 16zm18 0c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zm-9 3c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1z"
          />
          <circle cx="7" cy="21" r="3" strokeWidth="0" fill="#0063DC" />
          <circle cx="25" cy="21" r="3" strokeWidth="0" fill="#FF0084" />
        </svg>
        <SearchInput
          value={searchTerm}
          onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
            if (event.currentTarget instanceof HTMLInputElement) {
              updateSearchTerm(event.currentTarget.value);
            }
          }}
          badState={emptyResults}
        />
      </header>
      <main className="search-results">
        <ul>
          {searchResults.map(result => (
            <li key={result.media.m}>
              <ul className="result-details">
                <li>
                  <div>image</div>
                  <div>
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View image "${result.title}"`}
                    >
                      <img src={result.media.m} alt={result.title} />
                    </a>
                  </div>
                </li>
                <li>
                  <div>author</div>
                  <div>
                    <a
                      href={`https://www.flickr.com/photos/${
                        result.author_id
                      }/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.author.match(/"([^"]+)"/)[1]}
                    </a>
                  </div>
                </li>
                <li>
                  <div>date_taken</div>
                  <div>
                    {formatDate(parseDate(result.date_taken), "MMMM D YYYY")}
                  </div>
                </li>
                <li>
                  <div>tags</div>
                  <div>
                    {result.tags.split(" ").map(tag => (
                      <button
                        type="button"
                        title={`Search for "${tag}"`}
                        onClick={() => updateSearchTerm(tag)}
                        key={tag}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </li>
                <li>
                  <div>link</div>
                  <div>
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.link}
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

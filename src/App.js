// @flow

import React, { useEffect, useState, useRef } from "react";

import classnames from "classnames";

import { parse as parseDate, format as formatDate } from "date-fns";

import "./App.css";

import { debouncedSearch } from "./data";

import Logo from "./components/Logo"
import SearchInput from "./components/SearchInput";

type HeaderRef = {| current: null |} | HTMLElement | null;

function App() {
  const [searchTerm, updateSearchTerm] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  const [emptyResults, updateEmptyResults] = useState(false);

  let header: HeaderRef = useRef(null);

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
        <div className="App-lockup">
          <Logo />
          <SearchInput
            value={searchTerm}
            onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
              if (event.currentTarget instanceof HTMLInputElement) {
                updateSearchTerm(event.currentTarget.value);
              }
            }}
            badState={emptyResults}
          />
        </div>
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
                        onClick={() => {
                          if (header instanceof HTMLElement) {
                            header.scrollIntoView();
                          }
                          updateSearchTerm(tag);
                        }}
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

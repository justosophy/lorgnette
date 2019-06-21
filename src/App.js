// @flow

import React, { useEffect, useState, useRef } from "react";

import classnames from "classnames";

import { parse as parseDate, format as formatDate } from "date-fns";

import "./App.css";

import onTypingEffect from "./effects/on-typing";
import onSearchResultsEffect from "./effects/on-searchresults";
import onInitialLoadEffect from "./effects/on-initialload";

import Logo from "./components/Logo";
import SearchInput from "./components/SearchInput";
import Tags from "./components/Tags";

type HeaderRef = {| current: null |} | HTMLElement | null;

function App() {
  const [searchTerm, updateSearchTerm] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  const [emptyResults, updateEmptyResults] = useState(false);
  const [online, updateOnline] = useState(true);

  let header: HeaderRef = useRef(null);

  useEffect(onTypingEffect(searchTerm, updateSearchResults), [searchTerm]);
  useEffect(
    onSearchResultsEffect(searchTerm, searchResults, updateEmptyResults),
    [searchResults]
  );
  useEffect(onInitialLoadEffect(updateOnline), []);

  return (
    <div className="App">
      <header
        className={classnames("App-header", {
          "App-header-results": searchResults.length > 0
        })}
        ref={el => (header = el)}
      >
        <div className="App-lockup">
          <Logo closed={!online} />
          <SearchInput
            value={searchTerm}
            onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
              if (event.currentTarget instanceof HTMLInputElement) {
                if (window.navigator.onLine === false) {
                  updateOnline(false);
                } else {
                  updateSearchTerm(event.currentTarget.value);
                }
              }
            }}
            badState={emptyResults}
            disabled={!online}
          />
        </div>
      </header>
      <main className="search-results">
        <ul>
          {searchResults.map(result => {
            const author = result.author.match(/"([^"]+)"/)[1];
            const dateString = formatDate(
              parseDate(result.date_taken),
              "MMMM D YYYY"
            );
            return (
              <li key={result.media.m}>
                <ul className="result-details">
                  <li className="result-thumbnail">
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View image "${result.title}"`}
                    >
                      <img src={result.media.m} alt={result.title} />
                    </a>
                  </li>
                  <li>
                    by{" "}
                    <a
                      href={`https://www.flickr.com/photos/${
                        result.author_id
                      }/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {author}
                    </a>{" "}
                    on {dateString}
                  </li>
                  <li>
                    <Tags
                      title={result.title}
                      tagsList={result.tags.split(" ")}
                      maxLength={10}
                      handler={tag => {
                        if (header instanceof HTMLElement) {
                          header.scrollIntoView();
                        }
                        updateSearchTerm(tag);
                      }}
                    />
                  </li>
                  <li>
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.link}
                    </a>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;

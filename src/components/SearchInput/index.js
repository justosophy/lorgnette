import React, { useRef, useEffect } from "react";

import "./style.css";

const SearchInput = () => {
  let input = useRef(null);

  useEffect(() => {
      input.focus()
  });
  return (
    <div className="search-input-container">
      <input
        type="search"
        id="search-input"
        className="search-input"
        name="q"
        aria-label="Search flickr"
        ref={el => (input = el)}
        placeholder="Search flickr"
        maxLength={50}
      />
    </div>
  );
};

export default SearchInput;

import React, { useRef, useEffect, useState } from 'react'
// import type { Element } from 'react'
import "./style.css";

type SearchInputProps = {|
  value: string,
  onChange: Function,
|}

type InputRef = {| current: null |} | HTMLInputElement | null

const SearchInput = ({ value, onChange } : SearchInputProps) => {
  let input: InputRef = useRef(null);

  const [initialLoad, updateInitialLoad] = useState(true)

  useEffect(() => {
      if (input instanceof HTMLInputElement && initialLoad) {
        input.focus()
        updateInitialLoad(false)
      }
  }, [initialLoad]);

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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;

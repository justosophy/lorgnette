import React, { useRef, useEffect, useState } from "react";
import classnames from "classnames";
import "./style.css";

type SearchInputProps = {|
  value: string,
  onChange: Function,
  badState?: boolean,
  disabled?: boolean
|};

type InputRef = {| current: null |} | HTMLInputElement | null;

const SearchInput = ({
  value,
  onChange,
  badState = false,
  disabled = false
}: SearchInputProps) => {
  let input: InputRef = useRef(null);

  const [initialLoad, updateInitialLoad] = useState(true);

  useEffect(() => {
    if (input instanceof HTMLInputElement && initialLoad) {
      input.focus();
      updateInitialLoad(false);
    }
  }, [initialLoad]);

  return (
    <div className="search-input-container">
      <div>
        <input
          type="search"
          id="search-input"
          className={classnames("search-input", {
            "search-input--bad-state": !!badState
          })}
          name="q"
          aria-label={"Search flickr"}
          ref={el => (input = el)}
          placeholder={"Search flickr"}
          maxLength={50}
          value={disabled ? "search offline" : value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default SearchInput;

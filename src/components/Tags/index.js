import React, { useState } from 'react';

import './style.css';

type TagsProps = {
  tagsList: string[],
  maxLength?: number,
  handler: Function,
  title: string
};

const Tags = (props: TagsProps) => {
  const {
    tagsList, maxLength = 20, handler, title,
  } = props;

  const [showMore, updateShowMore] = useState(true);

  const len = tagsList.length;

  const renderMoreButton = len > maxLength && showMore;

  return (
    <div>
      {tagsList.slice(0, renderMoreButton ? maxLength : len).map(tag => (
        <button
          className="tag-button"
          type="button"
          title={`Search for '${tag}'`}
          onClick={() => handler(tag)}
          key={tag}
        >
          {tag}
        </button>
      ))}
      {renderMoreButton && (
        <button
          className="tag-button"
          type="button"
          title={`Show more tags for '${title}'`}
          onClick={() => {
            updateShowMore(false);
          }}
        >
          {'{ more tags.. }'}
        </button>
      )}
    </div>
  );
};

export default Tags;

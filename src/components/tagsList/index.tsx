import React from 'react';
import Tag from '../tag';
import './tags-list.scss';

const TagsList = () => {
  return (
    <div className="tags-list">
      {['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'].map((tag: string) => (
        <Tag key={tag} value={tag} />
      ))}
    </div>
  );
};

export default TagsList;

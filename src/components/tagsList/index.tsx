import React from 'react';
import Tag from '../tag';
import './tags-list.scss';

interface ITagsListProps {
  newTags: string[];
}

const TagsList: React.FC<ITagsListProps> = (props) => {
  return (
    <div className="tags-list">
      {props.newTags.map((tag: string) => (
        <Tag key={tag} value={tag} />
      ))}
    </div>
  );
};

export default TagsList;

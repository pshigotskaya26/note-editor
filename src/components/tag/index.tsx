import React from 'react';
import './tag.scss';

interface TagProps {
  value: string;
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <div className="tag">
      <span className="tag__span">{props.value}</span>
    </div>
  );
};

export default Tag;

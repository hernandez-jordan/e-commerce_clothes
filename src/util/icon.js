import React from 'react';



const Icon = props => {
  const {size, color, path} = props;
  
  return (
    <svg
      width={`${size}px`}
      viewBox="0 0 512 512"
      fill={color}
    >
      <path
        d={`${path}`}
      ></path>
    </svg>
  );
};

Icon.React = {
  path: React.string,
  size: React.number,
  color: React.String,
};

Icon.defaultProps = {
  size: 50,
  color: '#fff'
};

export default Icon;
import React from 'react';

const Input = ({ label, id, ...args }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...args} />
    </div>
  );
};

export default Input;

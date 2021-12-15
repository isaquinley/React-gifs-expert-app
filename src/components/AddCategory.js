import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cates) => [...cates, inputValue]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD CATEGORY</h2>
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

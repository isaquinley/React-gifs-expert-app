import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifCollection } from './components/GifCollection';

const GifExpertApp = () => {
  //   const categories = ['Drama', 'Terror', 'Suspenso'];

  const [categories, setCategories] = useState([]);

  //   const handleAdd = () => {
  //     setCategories([...categories, 'Accion']);
  //   };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GifCollection key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;

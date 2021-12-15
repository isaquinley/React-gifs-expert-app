import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ({ category }) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((images) =>
      setTimeout(() => {
        setState({ data: images, loading: false });
      }, 2000)
    );
  }, [category]); //Cada que la categoria cambia se dispara la peticion

  return state;
};

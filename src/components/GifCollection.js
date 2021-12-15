import React from 'react';
import { GifItem } from './GifItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifCollection = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <div className="card-grid">
          <h1>Cargando información</h1>
        </div>
      ) : (
        <div className="card-grid">
          {data?.map((img) => (
            <GifItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};

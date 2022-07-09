import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ data }) => {
  if (data.length === 0) {
    return <h1 style={{ textAlign: 'center' }}>Нет картинок с такой темой</h1>;
  }
  return (
    <div>
      <ul className={css.ImageGallery}>
        <ImageGalleryItem data={data} />
      </ul>
    </div>
  );
};

export default ImageGallery;

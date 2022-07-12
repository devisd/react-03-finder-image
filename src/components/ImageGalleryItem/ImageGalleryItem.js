import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  // id,
  // webformatURL,
  // tags,
  // largeImageURL,
  data,
  onClick,
}) => {
  const imagesArr = data;
  return imagesArr.map(el => {
    return (
      <li className={css.ImageGalleryItem} key={el.id}>
        <img
          src={el.webformatURL}
          alt={el.tags}
          className={css.ImageGalleryItem_image}
          largeImageURL={el.largeImageURL}
          onClick={() => onClick(el.largeImageURL)}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;

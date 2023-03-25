import React from 'react';
import style from '../ImageGalerryItem/ImageGalerryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ image, onImageClick }) {
  // const fullImage = () => onImageClick(image.largeImageURL);
  onImageClick = () => {
    console.log(image.largeImageURL);
  };

  return (
    <div>
      <li className={style.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={style.ImageGalleryItemImage}
          onClick={onImageClick}
        />
      </li>
    </div>
  );
}

ImageGalleryItem.defaultProps = {
  tags: '',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
};

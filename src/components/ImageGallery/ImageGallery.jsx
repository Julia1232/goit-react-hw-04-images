import React from 'react'
import ImageGalleryItem from 'components/ImageGalerryItem/ImageGalerryItem'
import style from '../ImageGallery/ImageGallery.module.css'
import PropTypes from 'prop-types'


const ImageGallery = ({ images, onImagesClick }) => (

    <ul className={style.ImageGallery}>
        {images.map(image=> {
            return (
    
        <ImageGalleryItem 
        key={image.id}
        image={image}
        onImagesClick={onImagesClick} />
            );
            
            
        })}

     </ul>
)

  
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};



export default ImageGallery

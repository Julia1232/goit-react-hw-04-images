import React, { Component } from 'react';
import Searchbar from './SearchBar/SearchBar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import IconButton from './IconButton/IconButton';
import Message from './Message/Message';
import { ReactComponent as CloseIcon } from '../components/icon/close.svg';
import Loader from './Loader/Loader';

import Modal from './Modal/Modal';
import apiSerrvice from './App/App';


 class App extends Component {
   state = {
     images: [],
     currentPage: 1,
     searchQuery: '',
     isLoading: false,
     showModal: false,
     largeImage: '',
     error: null,
   };
   componentDidUpdate(prevProps, prevState) {
     if (prevState.searchQuery !== this.state.searchQuery) {
       this.getImages();
     }
   }
   onChangeQuery = query => {
     this.setState({
       images: [],
       currentPage: 1,
       searchQuery: query,
       error: null,
     });
   };
   // Получаем дату из фетча
   getImages = async () => {
     const { currentPage, searchQuery } = this.state;
     this.setState({
       isLoading: true,
     });
     try {
       const { hits } = await apiSerrvice(searchQuery, currentPage);
       this.setState(prevState => ({
         images: [...prevState.images, ...hits],
         currentPage: prevState.currentPage + 1,
       }));
       if (currentPage !== 1) {
         this.scrollOnLoadButton();
       }
     } catch (error) {
       console.log('Smth wrong with App fetch', error);
       this.setState({ error });
     } finally {
       this.setState({
         isLoading: false,
       });
     }
   };
   
   handleGalleryItem = (fullImageUrl) => {
     this.setState({
       largeImage: fullImageUrl,
       showModal: true,
     });
   };
   

   toggleModal = () => {
     this.setState(prevState => ({
       showModal: !prevState.showModal,
       largeImage: '',
     }));
   };
   scrollOnLoadButton = () => {
     window.scrollTo({
       top: document.documentElement.scrollHeight,
       behavior: 'smooth',
     });
   };
   
   render() {
     const { images, isLoading, showModal, largeImage, error } = this.state;
     const needToShowLoadMore = images.length > 0 && images.length >= 12; // Нужны доп проверки;
     return (
       <>
         <Searchbar onSearch={this.onChangeQuery} />
         {images.length < 1 && (
           <Message>
             <h2>The gallery is empty 🙁</h2>
             <p>Use search field!</p>
           </Message>
         )}

         <ImageGallery images={images} onImageClick={this.handleGalleryItem} />
         {needToShowLoadMore && <Button onClick={this.getImages} />}
         {showModal && (
           <Modal onClose={this.toggleModal}>
             <div className="Close-box">
               <IconButton onClick={this.toggleModal} aria-label="Close modal">
                 <CloseIcon width="20px" height="20px" fill="#7e7b7b" />
               </IconButton>
             </div>
             <img src={largeImage} alt="" className="Modal-image" />
           </Modal>
         )}
         {isLoading && <Loader />}
         {error && (
           <Message>
             <h2>Oops! 😫</h2>
             <p>
               Sorry, something went wrong. Please try again, or{' '}
               <a href="/">refresh the page</a>.
             </p>
           </Message>
         )}
       </>
     );
   }
 }
 export default App;
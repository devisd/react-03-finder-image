import React, { Component } from 'react';
import imagesAPI from '../services/search-api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Error from 'components/Error';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    error: null,
    status: 'idle',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    // const { status, images } = this.state;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({
        status: 'pending',
      });
      imagesAPI
        .searchApi(nextQuery, nextPage)
        .then(data => {
          this.setState(prevState => {
            if (!prevState.images) {
              return {
                images: data,
                status: 'resolved',
              };
            }
            return {
              images: [...prevState.images, ...data],
              status: 'resolved',
            };
          });
        })
        .catch(error =>
          this.setState({
            error,
            status: 'rejected',
          })
        );
    }
  }

  onPageChange = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, error, status, showModal } = this.state;

    if (status === 'idle') {
      return (
        <h2 className={css.ImageGallery__title_text}>
          Введите тему изображений для поиска
        </h2>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <Error message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <div>
          <ul className={css.ImageGallery}>
            <ImageGalleryItem data={images} />
          </ul>
          <Button onClick={this.onPageChange} />
          <div>
            {showModal && (
              <Modal onClose={this.toggleModal} images={images}>
                <img src="" alt="" />
              </Modal>
            )}
            <button type="button" onClick={this.toggleModal}>
              Open modal
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ImageGallery;

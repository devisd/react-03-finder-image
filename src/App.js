import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    images: null,
    query: '',
    page: 1,
    loading: false,
  };

  // static propTypes = {
  //   images: PropTypes.string.isRequired,
  //   query: PropTypes.string.isRequired,
  //   page: PropTypes.number.isRequired,
  //   loading: PropTypes.bool,
  // };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== this.state.query) {
      this.setState({
        query,
        page: 1,
      });
    }
  }

  onLoadMore = page => {
    this.setState({
      page,
    });
  };

  formSubmitHandler = data => {
    const searchQuery = data.toLowerCase();
    const { page } = this.state;

    if (searchQuery.trim() === '') {
      return toast.error('Введите название для поиска');
    }

    this.setState({
      query: searchQuery,
      loading: true,
    });

    setTimeout(
      () =>
        fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=28430104-64039a230ce7799bb0faf758d&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(data => {
            this.setState({ images: data.hits });
          })
          .finaly(this.setState({ loading: false })),
      3000
    );
  };

  render() {
    const { images, loading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {images && <ImageGallery data={images} />}

        {images && <Button onClick={this.onLoadMore} />}

        {loading && <Loader />}
        <ToastContainer autoClose={2500} theme="dark" />
      </div>
    );
  }
}

export default App;

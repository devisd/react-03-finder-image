import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    query: '',
  };

  // static propTypes = {
  //   images: PropTypes.string.isRequired,
  //   query: PropTypes.string.isRequired,
  //   page: PropTypes.number.isRequired,
  //   loading: PropTypes.bool,
  // };

  formSubmitHandler = data => {
    const searchQuery = data.toLowerCase();

    if (searchQuery.trim() === '') {
      return toast.error('Введите название для поиска');
    }

    this.setState({
      query: searchQuery,
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery query={query} />
        <ToastContainer autoClose={2500} theme="dark" />
      </div>
    );
  }
}

export default App;

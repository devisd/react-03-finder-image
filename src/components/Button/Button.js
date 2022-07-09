import React, { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  state = {
    page: 1,
  };

  onPageChange = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
    this.props.onClick(this.state.page);
  };
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={this.onPageChange} className={css.Button}>
          Load more
        </button>
      </div>
    );
  }
}

export default Button;

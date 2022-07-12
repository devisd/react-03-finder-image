import React from 'react';
import css from './Button.module.css';

function Button({ onClick }) {
  return (
    <div className={css.Button_container}>
      <button onClick={onClick} className={css.Button}>
        Load more
      </button>
    </div>
  );
}

export default Button;

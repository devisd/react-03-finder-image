import errorImage from './error.jpg';
import css from './Error.module.css';

export default function ErrorView({ message }) {
  return (
    <div>
      <img className={css.error__img} src={errorImage} alt="всё пропало" />
      <h2 className={css.error__text}>{message}</h2>
    </div>
  );
}

// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import sprite from './sprite.svg';
import video from './bg-video.mp4';

export default function App() {
  return (
    <div className="middle-box">
      <img className="logo" src={logo} alt="waterFront-logo" />
      <h1 className="middle-box__title">BIENTÔT,</h1>

      <h2 className="middle-box__subtitle">Une nouvelle expérience...</h2>
      <form action="">
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">
          <span className="text">Me tenir informé</span>
        </button>
      </form>
      <p>Nous ne partagerons pas votre e-mail avec des tiers.</p>
      <div className="social">
        <a
          className="social__link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="social__icon">
            <use xlinkHref={sprite + '#icon-instagram'}></use>
          </svg>
        </a>
        <a
          className="social__link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="social__icon">
            <use xlinkHref={sprite + '#icon-twitter'}></use>
          </svg>
        </a>
        <a
          className="social__link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="social__icon">
            <use xlinkHref={sprite + '#icon-linkedin'}></use>
          </svg>
        </a>
      </div>

      {ReactDOM.createPortal(
        <div className="bg-video">
          <video className="bg-video__content" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>,
        document.body
      )}
    </div>
  );
}

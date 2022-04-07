// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import logo from './logo.png';
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
          <span className="text">NOTIFY ME </span>
        </button>
      </form>
      <p>Nous ne partagerons pas votre e-mail avec des tiers.</p>

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

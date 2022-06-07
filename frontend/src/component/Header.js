import './style.css'
import grape from './assets/grape.svg'
import grappeVideo from './assets/grappe-video.mp4'

export default function Header() {

  return (
    <>
      <div className="home">
        <div className="overlay"></div>
        <video autoPlay muted loop>
          <source src={grappeVideo} type="video/mp4" />
        </video>
        <div className="home-content">
          <h1>Des vignes d'exception.</h1>
          <div className="middle-line"></div>
          <img src={grape} alt="" />
          <button>DÉCOUVRIR</button>
        </div>
      </div>
    </>
  )
}
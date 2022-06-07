/* eslint-disable jsx-a11y/anchor-is-valid */
import barrel from './assets/barrel.svg'
import leaf from './assets/leaf.svg'

export default function Navbar() {

  return (
    <>
      <nav>
        <img src={barrel} alt="logo château" className="logo barrel" />
        <div className="container-nav">
          <a>ACCUEIL</a>
          <a>LE VIN</a>
          <a>CONTACT</a>
        </div>
        <img src={leaf} alt="logo feuille" />
      </nav>
    </>
  )
}
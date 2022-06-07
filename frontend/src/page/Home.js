import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export default function Home() {

  const TL = gsap.timeline()

  useLayoutEffect(() => {
    TL
      .to('h1', {
        autoAlpha: 1, y: 0, delay: 0.2
      })
      .to('.middle-line', {
        height: 200
      })
      .to('.home-content img', {
        autoAlpha: 1, y: 0
      })
      .to('.home-content button', {
        autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1
      })
      .to('nav a', {
        autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1
      })
      .to('nav img', {
        autoAlpha: 1, y: 0
      })
  }, [TL])

  return (
    <>
      <Navbar />
      <Header />
    </>
  )
}
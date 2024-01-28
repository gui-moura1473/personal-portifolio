import Banner from 'componentes/Banner';
import Header from 'componentes/Header'
import Skills from 'componentes/Skills';
import Sobre from 'componentes/Sobre';
import { useEffect, useRef } from 'react';
import './PaginaInicial.css'

const PaginaInicial = ({ setToggleTemaDark }) => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let animacao = entry.target.getAttribute('data-anime')
        if (entry.isIntersecting) {
          entry.target.classList.add(animacao);
        } else {
          entry.target.classList.remove(animacao);
        }
      })
    })

    const hiddenElements = document.querySelectorAll('[data-anime]');
    hiddenElements.forEach((element) => observer.observe(element));

    return () => hiddenElements.forEach((element) => observer.unobserve(element));
  })

  return (
    <>
      <Header setToggleTemaDark={setToggleTemaDark}/>
      <Banner/>
      <Sobre/>
      <Skills/>
    </>
  )
}

export default PaginaInicial
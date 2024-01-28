import './Sobre.css';
import fotoSobre from '../../assets/foto-sobre.png'
import { HiAcademicCap, } from "react-icons/hi"
import { AiOutlineCode } from "react-icons/ai"
import { BsCalendar } from "react-icons/bs"
import { MdWork } from "react-icons/md"
import BotaoCartoon from 'componentes/BotaoCartoon';
import { useState } from 'react';

const Sobre = () => {

  const [tipoQualificacao, setTipoQualificacao] = useState('educacao');

  function mudaQualificacao(tipo) {
    setTipoQualificacao(tipo)
  }

  return (
    <section className='sobre' id='sobre'>

      <div className="sobre__container">
        <h1 className="sobre__titulo">Sobre mim</h1>
        <div>

          <div className="sobre__bioWrapper" >
            <h2 className="sobre__subtitulo">Um pouco sobre mim</h2>
            <div>
              <img src={fotoSobre} className='sobre__foto animated' alt='Guilherme fazendo pose' data-anime="fadeIn-left" />
              <div className="sobre__bio animated" data-anime="fadeIn-bottom">
                <p>
                  Sou nativo de Birigui - SP, tenho 26 anos, casado e formado em Engenharia Civil desde 2018, não tendo me encontrado na área. Embarquei nos estudos na área de desenvolvmento Web em 2022 e me descobri como um futuro desenvolvedor em tempo integral. Hoje busco uma recolocação profissional ao mercado de tecnologia de informação e trabalho principalmente com <strong>React JS</strong> e suas principais bibliotecas. Já desenvolvi diversos projetos pessoais utilizando JavaScript Vanilla, dentre eles inclusive uma plataforma de criação e impressão de algumas etiquetas utilizadas no cotidiano em minha última experiência profissional.
                </p>
                <BotaoCartoon>
                  Download CV
                </BotaoCartoon>
              </div>
            </div>
          </div>

          <div className="sobre__qualificacoes">

            <h2 className="sobre__subtitulo">Um pouco da minha trajetória</h2>

            <div className='qualificacoes__tabs'>
              <button
                onClick={() => mudaQualificacao('educacao')}
                className={tipoQualificacao === 'educacao' ? "qualificacoes__button qualificacoes__button--ativo" : "qualificacoes__button"}
              >
                <HiAcademicCap />
                Educacional
              </button>
              <button
                onClick={() => mudaQualificacao('profissional')}
                className={tipoQualificacao === 'profissional' ? "qualificacoes__button qualificacoes__button--ativo" : "qualificacoes__button"}
              >
                <MdWork />
                Profissional
              </button>
            </div>

            <div className='qualificacoes__secoes'>

              <div className={tipoQualificacao === 'profissional' ? 'qualificacoes__conteudo qualificacoes__conteudo--ativo' : 'qualificacoes__conteudo'}>

                <div className="qualificacoes__dados animated" data-anime="fadeIn-bottom">
                  <div>
                    <h3 className="qualificacoes__titulo">Supervisor de Loja</h3>
                    <span className="qualificacoes__subtitulo">Birigui - Droga Raia</span>
                    <div className='qualificacoes__calendario'>
                      <BsCalendar />
                      2019 - Atualmente
                    </div>
                  </div>

                  <div>
                    <div className="qualificacoes__marcador"></div>
                    <div className="qualificacoes__linha"></div>
                  </div>
                </div>

                <div className="qualificacoes__dados animated" data-anime="fadeIn-bottom">

                  <div></div>

                  <div>
                    <div className="qualificacoes__marcador"></div>
                    <div className="qualificacoes__linha"></div>
                  </div>

                  <div>
                    <h3 className="qualificacoes__titulo">Estagiário</h3>
                    <span className="qualificacoes__subtitulo">Birigui - Secretaria de Obras</span>
                    <div className='qualificacoes__calendario'>
                      <BsCalendar />
                      2018 - 2019
                    </div>
                  </div>

                </div>

                <div className="qualificacoes__dados animated" data-anime="fadeIn-bottom">
                  <div>
                    <h3 className="qualificacoes__titulo">Auxiliar Administrativo</h3>
                    <span className="qualificacoes__subtitulo">Birigui - Farmaville</span>
                    <div className='qualificacoes__calendario'>
                      <BsCalendar />
                      2014 - 2018
                    </div>
                  </div>

                  <div>
                    <div className="qualificacoes__marcador"></div>
                    <div className="qualificacoes__linha"></div>
                  </div>
                </div>

              </div>

              <div className={tipoQualificacao === 'educacao' ? 'qualificacoes__conteudo qualificacoes__conteudo--ativo' : 'qualificacoes__conteudo'}>

                <div className="qualificacoes__dados animated" data-anime="fadeIn-bottom" style={{ alignSelf: 'flex-end' }}>
                  <div >
                    <h3 className="qualificacoes__titulo">Curso React JS</h3>
                    <span className="qualificacoes__subtitulo">React Router e etc.</span>
                    <div className='qualificacoes__calendario'>
                      <AiOutlineCode />
                      Alura Cursos
                    </div>
                  </div>

                  <div>
                    <div className="qualificacoes__marcador"></div>
                    <div className="qualificacoes__linha"></div>
                  </div>
                </div>

                <div className="qualificacoes__dados animated" data-anime="fadeIn-bottom">

                  <div></div>

                  <div>
                    <div className="qualificacoes__marcador"></div>
                    <div className="qualificacoes__linha"></div>
                  </div>

                  <div>
                    <h3 className="qualificacoes__titulo">Desenvolvimeto Web</h3>
                    <span className="qualificacoes__subtitulo">HTML, CSS, JS, Acessibilidade.</span>
                    <div className='qualificacoes__calendario'>
                      <AiOutlineCode />
                      Alura Cursos
                    </div>
                  </div>

                </div>

                <div className="qualificacoes__dados animated" data-anime="fadeIn-bottom">
                  <div>
                    <h3 className="qualificacoes__titulo">Curso de Inglês</h3>
                    <span className="qualificacoes__subtitulo">Inglês intermediário</span>
                    <div className='qualificacoes__calendario'>
                      <AiOutlineCode />
                      Infoprise
                    </div>
                  </div>

                  <div>
                    <div className="qualificacoes__marcador"></div>
                    <div className="qualificacoes__linha"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


    </section >
  )
}

export default Sobre
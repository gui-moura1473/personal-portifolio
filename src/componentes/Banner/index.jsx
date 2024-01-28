import './Banner.css'
import minhaFoto from '../../assets/minha-foto.png'
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"

const Banner = () => {

  

  return (
    <section className='banner' id='banner'>
      <div className='containerBanner'>

        <div className='bannerWrapper'>
          <div className='colunaEsquerda'>
            <h1 className='tituloPrincipal animated' data-anime="fadeIn-left">Olá! Meu nome é Guilherme. <br/> Desenvolvedor Front-End Junior.</h1>
            <p className='paragrafoPrincipal animated' data-anime="fadeIn-left">
              Entusiasta por novas tecnologias, adoro testar os limites de cada linguagem e desenvolver projetos mais desafiadores.<br />
              Nas horas vagas amante de plantas que adora um bom café.
            </p>
          </div>

          <div className='colunaDireita'>
            <img src={minhaFoto} alt="Guilherme sorrindo" className='minhaFoto animated' data-anime="fadeIn-right"/>
            <div className='janelaCodigo__container animated' data-anime="fadeIn-bottom">
              <div className='janelaCodigo__header'>
                <span className='janelaCodigo__dots'>&nbsp;</span>
                <span className='janelaCodigo__dots'>&nbsp;</span>
                <span className='janelaCodigo__dots'>&nbsp;</span>
              </div>
              <div className='janelaCodigo__body'>
                <div>
                  <span className='codeText__red'>while</span> &#40;Awake&#41; &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&#40;Coffee.isEmpty&#41; &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coffee.<span className='codeText__blue'>Fill</span>&#40;&#41;;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coffee.<span className='codeText__blue'>Drink</span>&#40;&#41;;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='codeText__red'>Life</span>++<br />
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='banner__redesSociais animated' data-anime="fadeIn-left">
          <a href='#'><AiFillGithub size={50} /></a>
          <a href='#'><AiOutlineTwitter size={50} /></a>
          <a href='#'><AiFillLinkedin size={50} /></a>
        </div>

      </div>



    </section>
  )
}

export default Banner
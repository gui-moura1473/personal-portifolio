import { useState } from 'react'
import CardSkill from './CardSkill'
import ModalSkill from './ModalSkill'
import ProgressBar from './ProgressBar'
import './Skills.css'
import { skills } from './Skills.jsx'

const Skills = () => {

    const [modal, setModal] = useState(false)
    const [modalAtual, setModalAtual] = useState('')

    function abreModal(skillAtual) {
        setModalAtual(skillAtual);
        setModal(true);
    }

    function fechaModal() {
        setModal(false)
    }

    return (
        <section className='skills' id='skills'>
            <div className="skills__container">
                <h1 className="skills__titulo">Minhas Skills</h1>
                <div>

                    <div className="softSkills__wrapper">
                        <h2 className="skills__subtitulo">Soft Skills</h2>
                        <h4>Boa Comunicação</h4>
                        <ProgressBar porcentagem={85} tamanho={80} aceitaDarkMode={true} />

                        <h4>Trabalho em equipe</h4>
                        <ProgressBar porcentagem={90} tamanho={80} aceitaDarkMode={true} />

                        <h4>Inteligência emocional</h4>
                        <ProgressBar porcentagem={75} tamanho={80} aceitaDarkMode={true} />

                        <h4>Gerenciamento de tempo</h4>
                        <ProgressBar porcentagem={80} tamanho={80} aceitaDarkMode={true} />
                    </div>

                    <div className="hardSkills__wrapper">
                        <h2 className="skills__subtitulo">Hard Skills</h2>
                        <div className='skills__wrapper animated' data-anime="fadeIn-bottom">
                            {skills.map((skill, index) => {
                                return <CardSkill
                                    key={index}
                                    titulo={skill.titulo}
                                    logotipo={skill.logotipo}
                                    descricao={skill.descricao}
                                    openModal={() => abreModal(index)}
                                />
                            })}
                        </div>
                    </div>


                </div>

            </div>
            {modal && <ModalSkill skill={skills[modalAtual]} isOpen={fechaModal} />}
        </section>


    )

}

export default Skills
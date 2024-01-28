import './CardSkill.css'

const CardSkill = ({ titulo, logotipo, openModal }) => {
    return (
        <div onClick={() => openModal()} className='skillCard'>
            <h3 className="skilldCard__titulo">{titulo}</h3>
            <i className={logotipo}></i>
        </div>
    )
}

export default CardSkill
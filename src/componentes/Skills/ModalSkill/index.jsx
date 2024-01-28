import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ProgressBar from "../ProgressBar";
import './ModalSkill.css'

const ModalSkill = ({ skill, isOpen }) => {

    useEffect(() => {
        document.addEventListener('keydown', verificaKey);

        function verificaKey(e) {
            if (e.code === 'Escape') {
                isOpen();
            }
        }

        return () => document.removeEventListener('keydown', verificaKey)
    }, [])

    return (
        <div className="dark-maskBG">

            <div className="modal-container">
                <AiOutlineClose onClick={() => isOpen()} />
                <div>
                    <i className={skill.logotipo}></i>
                    <div>
                        <h3>
                            {skill.titulo}
                        </h3>
                        <p>
                            {skill.descricao}
                        </p>
                    </div>
                </div>
                <ProgressBar porcentagem={skill.porcentagem} tamanho={70}/>
            </div>
        </div>
    )
}

export default ModalSkill
import styles from './BotaoCartoon.module.css';

const BotaoCartoon = ({ children, handleClick }) => {
    return (
        <button
            className={styles.botaoCartoon}
            onClick={() => handleClick}
        >
            {children}
        </button>
    )
}

export default BotaoCartoon
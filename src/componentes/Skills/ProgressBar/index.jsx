import './ProgressBar.css'

function ProgressBar({ porcentagem, tamanho, aceitaDarkMode = false }) {

    return (
        <div className={ aceitaDarkMode ? "progress-container dark" : "progress-container" } style={{ width: `${tamanho}%` }}>
            <label
                style={{ left: `${porcentagem}%`, backgroundColor: aceitaDarkMode ? 'var(--cor-progress-bar)' : '#3f3f3f' }}
            >
                {porcentagem} %
            </label>

            <span
                className="progress-bar bar-animated" data-anime="fadeIn-left"
                style={{ width: `${porcentagem}%`, backgroundColor: aceitaDarkMode ? 'var(--cor-progress-bar)' : '#3f3f3f' }}
            ></span>
        </div>
    )
}

export default ProgressBar
import './ToggleDeTema.css'

const ToggleDeTema = ({ onChange }) => {

    return (
        <div className='containerSwitch'>
            <input type="checkbox" onChange={onChange} id='chk' />
            <label htmlFor='chk' className='switch'>
                <span className='slider'></span>
            </label>
        </div>

    )
}

export default ToggleDeTema;
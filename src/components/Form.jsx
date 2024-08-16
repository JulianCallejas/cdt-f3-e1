import PropTypes from 'prop-types';
import styles from '../styles/form.module.css'

const Form = ({ data, handleChange, handleSubmit, validData }) => {
    
    return (
        <form onSubmit={handleSubmit} className={styles.form} >
            
            {
                !validData && <p className={styles.errorMsg} >Por favor chequea que la información sea correcta</p>
            }
            <div className={styles.inputContainer}>
                <input id="fruta" name="fruta" className={styles.input} type="text" placeholder=" " value={data.fruta} onChange={handleChange} />
                <div className={styles.cut}></div>
                <label htmlFor="fruta" className={styles.placeholder}>Ingresa una fruta</label>
            </div>
            
            <div className={styles.inputContainer}>
                <input id="lugar" name="lugar" className={styles.input} type="text" placeholder=" " value={data.lugar} onChange={handleChange} />
                <div className={styles.cut}></div>
                <label htmlFor="lugar" className={styles.placeholder}>Ingresa un lugar</label>
            </div>

            <div className={styles.inputContainer}>
                <input id="animal" name="animal" className={styles.input} type="text" placeholder=" " value={data.animal} onChange={handleChange} />
                <div className={styles.cut}></div>
                <label htmlFor="animal" className={styles.placeholder}>Ingresa un animal</label>
            </div>

            <div className={styles.inputContainer}>
                <button className="btn fill" type="submit" >ENVIAR</button>
            </div>
        </form>
    )
}

Form.propTypes = {
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    validData: PropTypes.bool.isRequired
}

export default Form
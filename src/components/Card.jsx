import PropTypes from 'prop-types';
import styles from '../styles/card.module.css'

const Card = ({ data, clearData }) => {
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.cardWrapper}>
                    <h2 className={styles.cardTitle}>Historia loca</h2>
                    <p className={styles.cardText} >
                        Un  
                        <span className={styles.cardSpan} > {data.animal} </span>
                        decidió usar un(a) 
                        <span className={styles.cardSpan} > {data.fruta} </span>
                        como sombrero para pasear por el(la) 
                        <span className={styles.cardSpan} > {data.lugar}.</span>
                        </p>
                </div>
                <div className={styles.cardButtonWrapper}>
                    <button className="btn outline" onClick={clearData} >Limpiar datos</button>
                </div>
            </div>
        </>
    );
};



Card.propTypes = {
    data: PropTypes.object.isRequired,
    clearData: PropTypes.func.isRequired

}

export default Card;
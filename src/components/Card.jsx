import PropTypes from 'prop-types';
import styles from '../styles/card.module.css'

const Card = ({ prueba }) => {
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.cardWrapper}>
                    <h2 className={styles.cardTitle}>Card Title</h2>
                    <p className={styles.cardText} >{prueba}</p>
                </div>
                <div className={styles.cardButtonWrapper}>
                    <button className="btn outline">DETAILS</button>
                    <button className="btn fill">BUY NOW</button>
                </div>
            </div>
        </>
    );
};



Card.propTypes = {
    prueba: PropTypes.string
}

export default Card;
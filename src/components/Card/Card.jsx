import styles from './Card.module.css';

const Card = ({title, value, className}) => {
    return(
        <div className={`${styles.card} ${className}`}>
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    );

}
export default Card;
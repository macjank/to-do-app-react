import styles from '../css/Card.module.css';

const Card = ({ children, backgroundColor, onClick, onHover }) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      onHover={onHover}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
};

export default Card;

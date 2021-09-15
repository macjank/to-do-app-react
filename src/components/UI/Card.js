import styles from "../css/Card.module.css";

const Card = ({ children, backgroundColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default Card;

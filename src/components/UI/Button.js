import styles from "../css/Button.module.css";

const Button = ({ content, backgroundColor, onClick }) => {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;

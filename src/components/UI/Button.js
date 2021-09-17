import styles from "../css/Button.module.css";

const Button = ({
  type,
  classesAdded,
  content,
  backgroundColor,
  onClick,
  isSquare,
}) => {
  const classes = `${styles.btn} ${classesAdded} ${
    isSquare ? styles.square : ""
  }`;
  
  return (
    <button
      type={type}
      className={classes}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;

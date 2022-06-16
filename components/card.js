import { Container } from "react-bootstrap";
import styles from "../styles/card.module.css";


const Card = ({ children, isLight }) => {
  return (
    <>
        <div className={isLight == true ? styles.card_light : styles.card}>{children}</div>
    </>
  );
};

export default Card;

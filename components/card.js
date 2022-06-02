import { Container } from "react-bootstrap";
import style from "../styles/card.module.css";


const Card = ({ children }) => {
  return (
    <>
        <div className={style.card}>{children}</div>
    </>
  );
};

export default Card;

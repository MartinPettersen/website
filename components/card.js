import { Container } from "react-bootstrap";
import style from "../styles/card.module.css";


const Card = ({ children }) => {
  return (
    <>
      <Container>
        <div className={style.card}>{children}</div>
      </Container>
    </>
  );
};

export default Card;

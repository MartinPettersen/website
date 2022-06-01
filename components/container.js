import { Container } from "react-bootstrap";
import style from "../styles/container.module.css";
// <div className={style.container}>{children}</div>


const Contentbox = ({ children }) => {
  return (
    <>
      <Container>
        <div className="container-fluid .contentbox content">{children}</div>
      </Container>
    </>
  );
};

export default Contentbox;

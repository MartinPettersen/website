import { Container } from "react-bootstrap";
import style from "./container.module.css";
const Contentbox = ({ children }) => {
  return (
    <>
      <Container>
        <div className={style.container}>{children}</div>
      </Container>
    </>
  );
};

export default Contentbox;

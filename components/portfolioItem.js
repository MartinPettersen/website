import React from 'react';
import Link from "next/link";
import style from "../styles/card.module.css";
import { Container, Row, Col } from "react-bootstrap";

const PortfolioItem = ({project, isLight}) => {
  return (
    <div>
        <div className={isLight == true ? "orange_border_light" : "orange-border"}>
            <h3>{project.title}</h3>
            <p className='description'>{project.description}</p>
            <p>{project.body}</p>
            <Container fluid className='gx-0 p-0'>
            <Row className='gx-0'>
            {project.tech.map(tech => {
              return (<Col key={tech} className="padding-col"><p>{tech}</p></Col>)
            })}
            </Row>
            </Container>
            <p><Link href={project.link}>Github</Link></p>
        </div>
    </div>
  )
}

export default PortfolioItem
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
            <Link href={`/posts/blogs/${project.nr}`} >Click here to read more</Link>
        </div>
    </div>
  )
}

export default PortfolioItem
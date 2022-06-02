import React from 'react';
import Link from "next/link";
import style from "../styles/card.module.css";
import { Container, Row, Col } from "react-bootstrap";

const PortfolioItem = ({project}) => {
  return (
    <div>
        <div className="orange-border">
            <h3>{project.title}</h3>
            <p className='description'>{project.description}</p>
            <p>{project.body}</p>

        </div>
    </div>
  )
}

export default PortfolioItem
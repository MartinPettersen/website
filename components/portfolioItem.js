import React from 'react'
import Link from "next/link";

const PortfolioItem = ({project}) => {
  return (
    <div>
        <div>
            <h3>{project.title}</h3>
            <p className='description'>{project.description}</p>
            <p>{project.body}</p>
            <p>{project.tech}</p>
            <p><Link href={project.link}>Github</Link></p>
        </div>
    </div>
  )
}

export default PortfolioItem
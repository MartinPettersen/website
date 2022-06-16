import Axios from 'axios';
import Link from "next/link";
import Card from '../../../components/card';
import portfolioData from '../../../tempDatabase.json'
import PortfolioItem from '../../../components/portfolioItem';
const data = portfolioData;

const PortfolioList = ({isLight}) => {
  console.log(data.portfolio)
  return (
    <div className="portfolio_container">
      <h1>Portfolio Page</h1>
      <div>
        {data.portfolio.map(project => {
          return <PortfolioItem key={project.title} project={project} isLight={isLight}/>
        })}
      </div>
    </div>
  )
}


export default PortfolioList;
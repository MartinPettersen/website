import Axios from 'axios';
import Link from "next/link";
import Card from '../../../components/card';
const PortfolioList = ({repositories}) => {
  console.log(repositories[0].name);
  return (
    <div>
      <h1>Portfolio Page</h1>
      {repositories.map(repositorie => 
      <Card key={repositorie.name}>


        <h2>Repositorie: {repositorie.name}</h2>
        <h2>Link: <Link href={repositorie.html_url}>Github</Link></h2>
        <h2>Languages: {repositorie.language}</h2>

      </Card>
      )}
      </div>
  )
}

export const getStaticProps = async () => {
  const data = await Axios.get("https://api.github.com/users/MartinPettersen/repos?")

  return {
    props: {
      repositories: data.data
    }
  }
}

export default PortfolioList;
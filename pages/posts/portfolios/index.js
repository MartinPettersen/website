import Axios from 'axios';

const PortfolioList = ({repositories}) => {
  console.log(repositories[0].name);
  return (
    <div>Portfolio Page</div>
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
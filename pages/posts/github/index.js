import Axios from 'axios';
import Link from "next/link";
import Card from '../../../components/card';
const GithubList = ({repositories, repList}) => {
  console.log(repositories[0].name);
  console.log('<<<<<<<<<<<<<<<')
  console.log(repList);
  console.log(repList[0]);
  console.log('>>>>>>>>>>>>>>>>>>')
  return (
    <div>
      <h1>Github Page</h1>
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

export const getServerSideProps = async () => {
  const data = await Axios.get("https://api.github.com/users/MartinPettersen/repos?")

  const repositorieList = [];
  data.data.map(async (repositorie) => {
    const languages = await Axios.get(repositorie.languages_url);
    const readme = await Axios.get(repositorie.url + "/contents/README.md"); 

    // console.log('link: '+ repositorie.url + "/contents/README.md" )
    // console.log(languages.data)
    // console.log(repositorie.languages_url)
    repositorieList.push({
      name: repositorie.name,
      htmlUrl: repositorie.html_url,
      languages,
      readme,
    })
  }
  );
  console.log(repositorieList);
  return {
    props: {
      repositories: data.data,
      repList: repositorieList
    }
  }
}

export default GithubList;
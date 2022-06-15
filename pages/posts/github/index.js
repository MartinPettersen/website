import Axios from "axios";
import Link from "next/link";
import Card from "../../../components/card";

const GithubList = ({ repositories, repList, isEnglish }) => {

  return (
    <div className="scrolling">
      <h1>Github {isEnglish ? "Page" : "Side"}</h1>
      {repositories.map((repositorie) => (
        <Card key={repositorie.name}>
          <h2>Repositorie: {repositorie.name}</h2>
          <h2>
          {isEnglish ? "Link" : "Lenke"}: <Link href={repositorie.html_url}>Github</Link>
          </h2>
          <h2>{isEnglish ? "Languages" : "Språk"}: {repositorie.language}</h2>
        </Card>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await Axios.get(
    "https://api.github.com/users/MartinPettersen/repos?", {
      'headers': {
        'Authorization': `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    }
  );

  const repositorieList = [];
  data.data.map(async (repositorie) => {
    const languages = await Axios.get(repositorie.languages_url);
    const readme = await Axios.get(repositorie.url + "/contents/README.md");
    repositorieList.push({
      name: repositorie.name,
      htmlUrl: repositorie.html_url,
      languages,
      readme,
    });
  });
  console.log(repositorieList);
  return {
    props: {
      repositories: data.data,
      repList: repositorieList,
    },
  };
};

export default GithubList;

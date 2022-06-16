import blogData from "../../../tempDatabase.json";
import BlogItem from "../../../components/blogItem";
const data = blogData;

const BlogDefault = ({isLight}) => {
  return (
    <div>
      {" "}
      <div className="scrolling">
        {data.blogPosts.map((project) => {
          return <BlogItem key={project.title} project={project} isLight={isLight}/>;
        })}
      </div>
    </div>
  );
};

export default BlogDefault;

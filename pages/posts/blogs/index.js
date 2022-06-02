import blogData from '../../../tempDatabase.json'
import BlogItem from '../../../components/blogItem';
const data = blogData;

const BlogDefault = () => {

    return <div> <div className="scrolling">
    {data.blogPosts.map(project => {
      return <BlogItem key={project.title} project={project}/>
    })}
  </div></div>
}

export default BlogDefault;
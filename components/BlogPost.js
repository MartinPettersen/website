import Link from 'next/link'


const BlogPost = ({post}) => {
  return (
    <div>
        <h3>{post.blogData.title}</h3>
        <p>{post.blogData.description}</p>
        <div>Date: {post.blogData.date}</div>
        <Link href={`/posts/blogs/${post.slug}`} >
            <a>Go to Blog Post</a>
        </Link>
        
    </div>
  )
}

export default BlogPost
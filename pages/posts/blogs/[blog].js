import { useRouter } from 'next/router';
import blogData from "../../../tempDatabase.json";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('blogposts'))

    const paths = files.map(filename => ({
        params: {
            blog: filename.replace('.md', '')
        }
    }))


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {blog}}) {
    const markdown = fs.readFileSync(path.join('blogposts', blog + '.md'), 'utf-8')

    const {data:blogData, content} = matter(markdown)

    return {
        props: {
            blogData,
            blog,
            content
        }
    }
}

const Blog = ({blogData: {title, date, description}, blog, content}) => {

    const router = useRouter();
    //const {blog} = router.query
    //const {blogPosts} = blogData


    /*
            {
        blogPosts.filter(blogPost => blogPost.nr === parseInt(blog))
        .map((blogContent) => {
            return <div key={blogContent.nr}>
            <h1>{blogContent.title}</h1>
            <br/>
            <h2>{blogContent.description}</h2>
            <br/>

            <p>{blogContent.body}</p>

            </div>
        } )
        }
        */
    // <p>{project.body}</p>
    return <div> 
        <Link href="/posts/blogs/">
            <a>Return</a>
        </Link>
        <div>
            <h1>{title}</h1>
            <div>
               Date: {date} 
            </div>
            <div>
                <div dangerouslySetInnerHTML={{__html: marked(content)}}>

                </div>
            </div>
        </div>
        
        </div>;

}

export default Blog
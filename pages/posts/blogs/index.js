import blogData from "../../../tempDatabase.json";
import BlogItem from "../../../components/blogItem";
import { useState } from "react";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogPost from "../../../components/BlogPost";
import {sortByDate} from "../../../utils";

const data = blogData;

/*
      {" "}
      <div className="scrolling">
        {data.blogPosts.map((project) => {
          return <BlogItem key={project.nr} project={project} isLight={isLight}/>;
        })}
      </div>
      */

export async function getStaticProps() {
  const blogFiles = fs.readdirSync(path.join('blogposts'))


  const blogposts = blogFiles.map(filename => {
    const slug = filename.replace('.md', '')

    const markdown = fs.readFileSync(path.join('blogposts', filename), 'utf-8')

    const {data:blogData} = matter(markdown)
    
    return {
      slug,
      blogData
    }
  }) 
  
  return {
    props: {
      posts: blogposts.sort(sortByDate),
    },
  }
}


const BlogDefault = ({posts, isLight}) => {
  console.log(posts)
  return (
    <div>
      <div>
        {posts.map((post, index) => 
          (
            <BlogPost key={index} post={post} />
          )
        )}
      </div>
    </div>
  );
};

export default BlogDefault;

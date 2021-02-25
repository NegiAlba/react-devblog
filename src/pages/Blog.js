import React, { useState, useEffect } from 'react'
import trending from '../assets/mocks/trending';
import {PostMasonry} from '../components/common';
import axios from 'axios';


const apiUrl = 'http://localhost:3000/api/v1/posts'

const Blog = () => {
    const [apiPosts,setApiPosts] = useState([]);
    
    async function getPosts() {
        try {
          const res = await axios.get(apiUrl);
          console.log(res.data);
          setApiPosts(res.data);
        } catch (err) {
          console.error(err);
        }
    }
    useEffect(()=>{
        getPosts()
      },[])
    return (
        <section className="container">
            <div className="row">
                <h2 className="blog-title">Trending Posts</h2>
                <PostMasonry posts={trending} columns={4}/>
                <PostMasonry posts={apiPosts} columns={3}/>
            </div>
        </section>
    )
}

export default Blog

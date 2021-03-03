import React, {useState, useEffect} from 'react'
import { useRouteMatch, Link  } from 'react-router-dom';
import axios from 'axios';

const apiHandle = "http://localhost:5000/api/v1/posts"

const Single = () => {
    const match = useRouteMatch();
    const [post,setPost] = useState({});
    const getPost = async () => {
        try {
            const res = await axios.get(`${apiHandle}/${match.params.title}`);
            setPost(res.data);
            console.log(post);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPost();
    },[])
    return (
        <section className="single">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {/* <Link to='/blog' component={Blog}>Return to blog posts</Link> */}
            <Link to="/blog">Retour au blog</Link>
        </section>
    )
}

export default Single

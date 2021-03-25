import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Input, Button} from 'antd';
const { TextArea } = Input;

const Form = () => {

        
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [tags,setTags] = useState([]);
    const [setSubmit] = useState(false);
    const [post,setPost] = useState([]);

    async function uploadData() {
        const postUrl = 'https://boiling-bayou-80998.herokuapp.com/api/v1/posts';
        try {
            const createPost = await axios.post(postUrl, post);
            console.log(createPost)
        } catch (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }


    useEffect(() => {
        console.log(post)
        uploadData(); // This is be executed when `post` state changes
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setPost({
            ...{title},
            ...{content},
            ...{tags}
        });
    }


    return (
        <div>
                <form className="post-form" onSubmit={handleSubmit}>
                    <label htmlFor="post-title">Titre du post : </label>
                    <Input name="post-title" id="post-title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

                    <label htmlFor="post-content">Contenu : </label>
                    <TextArea name="post-content" id="post-content" cols="30" rows="10" value={content} onChange={(e)=>setContent(e.target.value)}></TextArea>

                    <label htmlFor="post-tags">Tags/Catégories </label>
                    <Input name="post-tags" id="post-tags" value={tags} onChange={(e)=>{
                        let newTags = e.target.value.toLowerCase().split(',');
                        setTags(newTags);
                    }}/>
                    <Button key="submit" type="primary" onClick={handleSubmit}>
                        Créer le post
                    </Button>
                </form>
        </div>
    )
}

export default Form

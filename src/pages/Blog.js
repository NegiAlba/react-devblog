import { useState, useEffect} from 'react'
import trending from '../assets/mocks/trending';
import {PostMasonry} from '../components/common';
import axios from 'axios';
import { Modal, Button } from 'antd';
import Form from '../components/Form';
import { PlusCircleOutlined } from '@ant-design/icons';


const apiUrl = 'https://boiling-bayou-80998.herokuapp.com/api/v1/posts'

const Blog = () => {
    const [apiPosts,setApiPosts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    let [submittedForm,setSubmittedForm] = useState(0);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSubmittedForm(submittedForm+=1);
  };

  const handleCancel = () => {
     setIsModalVisible(false);
  };

    async function getPosts() {
        try {
          const res = await axios.get(apiUrl);
          console.log(res.data);
          setApiPosts(res.data.reverse());
          console.log(apiPosts);
        } catch (err) {
          console.error(err);
        }
    }
    useEffect(()=>{
        getPosts()
      },[submittedForm])
    return (
        <section className="container">
            <div className="creating-row">
            <Button type="primary" onClick={showModal} style={{backgroundColor: '#F50057'}}>
              <p>Créer un nouvel article  <PlusCircleOutlined style={{ fontSize: '1rem' }}/></p>
            </Button>
            <Modal title="Créer un nouveau post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <Form handleOk={handleOk} action={handleCancel}/>
            </Modal>
            </div>
            <div className="row">
                <h2 className="blog-title">Posts</h2>
                <PostMasonry posts={apiPosts} columns={3}/>
                <PostMasonry posts={trending} columns={4}/>
            </div>
        </section>
    )
}

export default Blog

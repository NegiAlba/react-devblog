import Form from "../components/Form"
import trending from '../assets/mocks/trending';
import {PostMasonry} from '../components/common';

const Blog = () => {

    return (
        <section className="container">
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMasonry posts={trending} columns={3}/>
            </div>
            <Form/>
        </section>
    )
}

export default Blog

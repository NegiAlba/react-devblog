import React from 'react'
import {TagRow} from './'
import { Link } from 'react-router-dom'


const MasonryPost = ({post,tags}) => {
    return (
        <Link to={`blog/${post.title}`} className="masonry-post overlay">
            <div className="masonry-text" style={{justifyContent: tags ? 'space-between' : 'flex-end'}}>
            <TagRow tags={post.tags} />
                <div>
                    <h2 className="masonry-title">{post.title}</h2>
                    <p className="masonry-content">{`${post.content.substring(0,150)}...`}</p>
                </div>
            </div>
        </Link>
    )
}

export default MasonryPost

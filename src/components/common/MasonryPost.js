import React from 'react'
import {TagRow} from './'


const MasonryPost = ({post,tags}) => {
    return (
        <a className="masonry-post overlay" href="/">
            <div className="masonry-text" style={{justifyContent: tags ? 'space-between' : 'flex-end'}}>
            <TagRow tags={post.tags} />
                <div>
                    <h2 className="masonry-title">{post.title}</h2>
                    <p className="masonry-content">{`${post.content.substring(0,150)}...`}</p>
                </div>
            </div>
        </a>
    )
}

export default MasonryPost

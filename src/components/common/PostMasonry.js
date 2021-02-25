import React from 'react';
import {MasonryPost} from './'

const PostMasonry = ({posts,columns,tags}) => {
    return (
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
        { posts.map((post, index) => 
            <MasonryPost {...{post, index, tags, key:index}}/>    
        )}
        </section>
    )
}

export default PostMasonry

import React from 'react'
import "./Post.css"

function Post({src, title, description, price}) {
    return (

        <div className="post">
            <img src={src} alt=""/>
            <div className="post__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        </div>
    )
}
export default Post

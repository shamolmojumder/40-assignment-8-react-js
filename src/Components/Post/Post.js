import React from 'react';

const Post = (props) => {
    console.log(props);
    const {title}=props.post
    return (
        <div>

            <h1>Post tilte: {title} </h1>            
        </div>
    );
};

export default Post;
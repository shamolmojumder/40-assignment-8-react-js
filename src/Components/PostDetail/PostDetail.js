import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const {id}= useParams();
    const [countryDetail,setCountryDetail]=useState({});
    const [comment,setComment]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setCountryDetail(data) )
    })
    // comments
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res=>res.json())
        .then(data=> setComment(data) )
    })
    const{body,title} =countryDetail
    
    return (
        <div style={{color:"purple",border:'1px solid black'}}>
            <h1>post detail {id} </h1>
            <h1> {title} </h1>
            <p>{body} </p>
            <h4>Email: {comment.email} </h4>
            <h2>Comments: {comment.body} </h2>
        </div>
    );
};

export default PostDetail;
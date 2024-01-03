import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'

import PostHeader from './compoents/PostHeader';
import PostBody from './compoents/PostBody';

import { getPostDetail } from '@/apis/postApis';

//import PostEdit from './PostEdit';


const PostDetail = () => {

    const [postDetails, setPostDetails] =useState<Post>();
    const params = useParams();
    const productId = params.id;

    useEffect(()=>{
        (async()=>{
            if (!productId) return;
            const details = await getPostDetail(productId);
            await setPostDetails(details);
            console.log(JSON.parse(details.title))
        })();
    },[]);

    return (
        <div>
            {postDetails ? 
                <div>
                    <PostHeader title ={JSON.parse(postDetails.title).title} author={postDetails.author.fullName} createAt={postDetails.createdAt} profileImg={postDetails.image}/>
                    <hr className ="w-4/5 mx-auto my-8 px-2"/>
                    <PostBody body = {JSON.parse(postDetails.title).body} likeNum = {postDetails.likes.length} commentNum={postDetails.comments.length}/>
                    <hr className ="w-4/5 mx-auto mb-8 mt-2 px-2"/>
                </div>
                : null
            }
        </div>
    )
}

export default PostDetail; 
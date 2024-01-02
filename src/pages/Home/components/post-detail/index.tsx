import { getPostDetail } from '@/apis/postApis';
import { useState,useEffect } from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';

type PostDetail = {
    id : string,
}

const PostDetail = ({id} : PostDetail) => {

    const [postDetails, setPostDetails] =useState<Post>();
    useEffect(()=>{
        (async()=>{
            const details = await getPostDetail(id);
            await setPostDetails(details);
        })();
    },[]);

    return (
        <div>
            {postDetails ? 
                <div>
                    <PostHeader title ={JSON.parse(postDetails.title).title} author={postDetails.author.fullName} createAt={postDetails.createdAt} profileImg={postDetails.image}/>
                    <hr className ="w-4/5 mx-auto my-8"/>
                   
                </div>
                 : null
            }
        </div>
    )
}

export default PostDetail; 
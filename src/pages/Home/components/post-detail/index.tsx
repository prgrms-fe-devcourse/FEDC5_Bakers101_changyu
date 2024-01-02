import { getPostDetail } from '@/apis/postApis';
import { useState,useEffect } from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostEdit from './PostEdit';


type PostDetail = {
    id : string,
}

const PostDetail = ({id} : PostDetail) => {

    const [postDetails, setPostDetails] =useState<Post>();
    const [isEdit, setIsEdit] =useState<boolean>();


    useEffect(()=>{
        (async()=>{
            const details = await getPostDetail(id);
            await setPostDetails(details);
            console.log(JSON.parse(details.title))
        })();
    },[]);

    return (
        <div>
            {postDetails ? 
                !isEdit?
                <div>
                    <PostHeader title ={JSON.parse(postDetails.title).title} author={postDetails.author.fullName} createAt={postDetails.createdAt} profileImg={postDetails.image}/>
                    <hr className ="w-4/5 mx-auto my-8 px-2"/>
                    <PostBody body = {JSON.parse(postDetails.title).body} likeNum = {postDetails.likes.length} commentNum={postDetails.comments.length}/>
                    <hr className ="w-4/5 mx-auto mb-8 mt-2 px-2"/>
                </div>
                : <PostEdit/>
                : null
            }
        </div>
    )
}

export default PostDetail; 
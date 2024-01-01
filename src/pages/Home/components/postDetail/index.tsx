import { getPostDetail } from '@/apis/postApis';
import { useState,useEffect } from 'react';


type PostDetail = {
    id : string,
}

const PostDetail = ({id} : PostDetail) => {

    const [postDetails, setPostDetails] =useState(null);
    useEffect(()=>{
        (async()=>{
            const details = await getPostDetail(id);
            await setPostDetails(details);
        })();
    },[]);

    return (
        <div>

        </div>
    )
}

export default PostDetail; 
import { useState,useEffect } from 'react';
import getPostList from '@/apis/getPostList';

type PostList = {
    channel : string
}   

const PostList = ({channel} : PostList) => {

    const [postList,setPostList] = useState([]);

    useEffect(()=>{
        (async() =>{
            const channeListRequest = await getPostList(channel);
            setPostList(channeListRequest);
        })()
    },[channel]);

    return (
        <div>
            {postList.map((item)=>(
                <p>{item}</p>
            ))}
        </div>
    )
}

export default PostList;
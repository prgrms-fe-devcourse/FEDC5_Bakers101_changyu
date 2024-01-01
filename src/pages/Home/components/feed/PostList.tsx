import { useState,useEffect } from 'react';

import {getPostList,getAllPostList} from '@/apis/postApis';
import PostlItem from './PostItem';

type nowChannelType = {
    title : string,
    id?: string,
}

const PostList = ({title, id} : nowChannelType) => {

    const [postList,setPostList] = useState<Post[]>([]);

    const fetchPostList = async () =>
    {
        if (title === '전체 채널' && id === undefined)
        {
            (async() =>{
                const channeListRequest = await getAllPostList();
                setPostList(channeListRequest);
            })()
        } else if (id !== undefined) {
            (async() =>{
                const channeListRequest = await getPostList(id);
                setPostList(channeListRequest);
            })()
        }
        //setIsChange(false);
    }
    useEffect(()=>{
        fetchPostList();
    },[title]);


    return (
        <div className ="relative">
            {postList.map((item,index)=>(
                <PostlItem postDetail = {item} index={index} key = {index}/>
            ))}
        </div>
    )
}

export default PostList;
import { useState,useEffect } from 'react';

import {getPostList,getAllPostList} from '@/apis/postApis';
import PostlItem from './PostItem';

type nowChannelType = {
    title : string,
    id?: string,
    onClickPostItem : (id : string) => void
 }

const PostList = ({title, id, onClickPostItem} : nowChannelType) => {

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
        <div className ="relative flex flex-col">
            {postList.map((item,index)=>(
                <button  key = {index} onClick={()=>onClickPostItem(item._id)}>
                    <PostlItem postDetail = {item} index={index}/>
                </button>
            ))}
        </div>
    )
}

export default PostList;
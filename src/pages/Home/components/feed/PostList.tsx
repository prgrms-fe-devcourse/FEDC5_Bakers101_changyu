import { useState,useEffect } from 'react';
import {getPostList,getAllPostList} from '@/apis/getPostList';

type nowChannelType = {
    title : string,
    id?: string,
}

type ChannelListItemType = nowChannelType


const PostList = ({title, id} : nowChannelType) => {

    const [postList,setPostList] = useState<ChannelListItemType[]>([]);

    useEffect(()=>{
        if (title === '전체보기' && id === undefined)
        {
            (async() =>{
                const channeListRequest = await getAllPostList();
                console.log(channeListRequest);
                setPostList(channeListRequest);
            })()
        } else if (id !== undefined) {
            (async() =>{
                const channeListRequest = await getPostList(id);
                console.log(channeListRequest);
                setPostList(channeListRequest);
            })()
        }
    },[title]);

    return (
        <div>
            {postList.map((item,index)=>(
                <p key = {index}>{item.title}</p>
            ))}
        </div>
    )
}

export default PostList;
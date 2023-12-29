import { useState,useEffect } from 'react';
import getPostList from '@/apis/getPostList';

type nowChannelType = {
    title : string,
    id?: string,
}

type ChannelListItemType = nowChannelType


const PostList = ({name, id} : nowChannelType) => {

    const [postList,setPostList] = useState<ChannelListItemType[]>([]);

    useEffect(()=>{
        if (id === undefined)
            return ;
        console.log(name);
        (async() =>{
            const channeListRequest = await getPostList(id);
            console.log(channeListRequest);
            setPostList(channeListRequest);
        })()
    },[name]);

    return (
        <div>
            {postList.map((item,index)=>(
                <p key = {index}>{item.title}</p>
            ))}
        </div>
    )
}

export default PostList;
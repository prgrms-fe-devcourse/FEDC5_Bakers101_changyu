import { useState,useEffect } from 'react';
import {getPostList,getAllPostList} from '@/apis/postApis';
import PostlItem from './PostItem';

type nowChannelType = {
    title : string,
    id?: string,
}

type PostListItemType = {
    comments : Comment[],
    likes : Like[],
    image : string | null,
    imagePublicId : string | null,
    title : string,
    channel : Channel,
    author : User,
    _id : string,
    createdAt: string,
    updatedAt: string,
}


const PostList = ({title, id} : nowChannelType) => {

    const [postList,setPostList] = useState<PostListItemType[]>([]);

    useEffect(()=>{
        if (title === '전체 채널' && id === undefined)
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
                <PostlItem postDetail = {item} key = {index}/>
            ))}
        </div>
    )
}

export default PostList;
import axiosInstance from './api';
import getChannelList from './getChannelList';


type AuthorType = {
    role: string;
    emailVerified: boolean;
    banned: boolean;
    isOnline: boolean;
    posts: string[];
  };
  
  type ChannelType = {
    authRequired: boolean;
    posts: string[];
    _id: string;
    name: string;
    description: string;
  };
  
  type PostListType = {
    author: AuthorType;
    channel: ChannelType;
    comments: string[];
    createdAt: string;
    likes: string[];
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };


async function getPostList(channelId : string)
{
    const request = await axiosInstance
    .get(`/posts/channel/${channelId}`);
    return request.data;
}

async function getAllPostList()
{
    const channelList =  await getChannelList();
    const postListPromises = channelList.map(({_id} : PostListType)=>{
        return getPostList(_id);
    });
    const postList = (await Promise.all(postListPromises)).flat();
    return postList;

}
export {getPostList, getAllPostList};

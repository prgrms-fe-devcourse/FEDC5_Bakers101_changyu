import axiosInstance from './api';
import { getChannelList } from './channelApis';


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

const createPost = async(token : string, formData : FormData) =>{
  try {
    await axiosInstance
    .post('/posts/create', formData,
      {headers: {'Authorization': `bearer ${token}`,'Content-Type': 'multipart/form-data'}})
  } catch (error) {
    throw new Error(`${error}`)
  }
}

const deletePost = async(token : string, id:string)=>{
  try {
    await axiosInstance
    .delete('/posts/delete', { 
      headers: {'Authorization': `bearer ${token}`},
      data: {'id': id},
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

const getPostDetail = async(postId : number) => {
  try {
    const request = await axiosInstance
    .get(`/posts/${postId}`);
    return request.data;
  } catch (error) {
    throw new Error(`${error}`)
  }
}

const getPostList = async(channelId : string) => {
  try {
    const request = await axiosInstance
    .get(`/posts/channel/${channelId}`);
    if (!request)
      return ;
    request.data.sort((a : PostListType ,b : PostListType)=>  Number(b.createdAt)- Number(a.createdAt))
    return request.data;
  } catch (error) {
    throw new Error(`${error}`)
}
}

const getAllPostList = async() =>{
  try {
    const channelList =  await getChannelList();
    const postListPromises = channelList.map(({_id} : PostListType)=>{
        return getPostList(_id);
    });
    const postList = (await Promise.all(postListPromises)).flat();
    postList.sort((a : PostListType ,b : PostListType)=>  Number(b.createdAt)- Number(a.createdAt))
    return postList;
  } catch (error) {
    throw new Error(`${error}`)
  }
}
export {deletePost, createPost,getPostDetail, getPostList, getAllPostList};

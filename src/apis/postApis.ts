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

// const createPost = async(token : string, fomrData : FormData) =>{
//     await axiosInstance
//     .post('/posts/create',{'title' : fomrData},
//       {headers: {'Authorization': `bearer ${token}`,'Content-Type': 'multipart/form-data'}})
//       .then((req)=>console.log(req));
// }



const createPost = async(token : string, formData : FormData) =>{
  await axiosInstance
  .post('/posts/create', formData,
    {headers: {'Authorization': `bearer ${token}`,'Content-Type': 'multipart/form-data'}})
    .then((req)=>console.log(req));
}


const getPostDetail = async(postId : number) => {
    const request = await axiosInstance
    .get(`/posts/${postId}`);
    console.log(request.data);
    return request.data;
}

const getPostList = async(channelId : string) => {
    const request = await axiosInstance
    .get(`/posts/channel/${channelId}`);
    if (!request)
      return ;
    request.data.sort((a : PostListType ,b : PostListType)=>  Number(b.createdAt)- Number(a.createdAt))
    return request.data;
}

const getAllPostList = async() =>{
    const channelList =  await getChannelList();
    const postListPromises = channelList.map(({_id} : PostListType)=>{
        return getPostList(_id);
    });
    const postList = (await Promise.all(postListPromises)).flat();
    postList.sort((a : PostListType ,b : PostListType)=>  Number(b.createdAt)- Number(a.createdAt))
    return postList;

}
export {createPost,getPostDetail, getPostList, getAllPostList};

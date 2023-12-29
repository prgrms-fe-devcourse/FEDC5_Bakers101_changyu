import axiosInstance from './api';

const createPost = async(token : string, title :string, image : null, channelId  : string) =>{
     await axiosInstance
     .post('/posts/create',{'title' :  title , 'image' : image, 'channelId' : channelId },{headers: {'Authorization': `bearer ${token}`}}).then((req)=>console.log(req));
}

export default createPost;
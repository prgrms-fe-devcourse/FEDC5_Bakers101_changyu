import axiosInstance from './api';

async function getPostList(channelId : string)
{
    const request = await axiosInstance
    .get(`/posts/channel/${channelId}`);

    return request.data;
}
export default getPostList

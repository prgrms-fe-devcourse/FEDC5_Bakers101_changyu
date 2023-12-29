import axiosInstance from './api';

async function getPostList(channel : string)
{
    const request = await axiosInstance
    .get(`/channel/${encodeURIComponent(channel)}`);

    return request.data;
}
export default getPostList

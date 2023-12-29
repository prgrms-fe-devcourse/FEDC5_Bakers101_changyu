import axiosInstance from './api';

async function getChannelList()
{
    const request = await axiosInstance
    .get('/channels');

    return request.data;
}
export default getChannelList
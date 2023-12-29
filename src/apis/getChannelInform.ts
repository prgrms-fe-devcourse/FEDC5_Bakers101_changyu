import axiosInstance from './api';

async function getChannelInform(channel : string)
{
    const request = await axiosInstance
    .get(`/channel/${encodeURIComponent(channel)}`);

    return request.data;
}
export default getChannelInform
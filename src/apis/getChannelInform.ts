import axiosInstance from './api';

async function getChannelInform(channel : string)
{
    console.log(channel);
    const request = await axiosInstance
    .get(`/channels/${encodeURIComponent(channel)}`);

    return request.data;
}
export default getChannelInform
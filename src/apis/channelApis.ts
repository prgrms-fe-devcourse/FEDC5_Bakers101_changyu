import axiosInstance from './api';

const createChannel = async (token: string, channelName : string, description : string)=>
{
    const adminCheck = await axiosInstance
    .get('/auth-user',{headers: {'Authorization': `bearer ${token}`}});

    if (adminCheck.data.role !== 'SuperAdmin')
        throw new Error('관리자권한이 없어서 채널 못 만듬');

    await axiosInstance
      .post('/channels/create',{'authRequired' : false ,'description' : `${description}`, 'name' : `${channelName}`},{headers: {'Authorization': `bearer ${token}`}})
}

const getChannelInform = async (channel : string) =>
{
    const request = await axiosInstance
    .get(`/channels/${encodeURIComponent(channel)}`);

    return request.data;
}

const getChannelList = async () =>
{
    const request = await axiosInstance
    .get('/channels');
    return request.data;
}
export {createChannel,getChannelInform,getChannelList};
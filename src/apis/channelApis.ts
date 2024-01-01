import axiosInstance from './api';

const createChannel = async (token: string, channelName : string, description : string)=>
{
    try {
        const adminCheck = await axiosInstance
        .get('/auth-user',{headers: {'Authorization': `bearer ${token}`}});

        if (adminCheck.data.role !== 'SuperAdmin')
            throw new Error('관리자권한이 없어서 채널 못 만듬');

        await axiosInstance
        .post('/channels/create',{'authRequired' : false ,'description' : `${description}`, 'name' : `${channelName}`},{headers: {'Authorization': `bearer ${token}`}})
    } catch (error) {
        throw new Error(`${error}`)
    }

}

const getChannelInform = async (channel : string) =>
{
    try {
        const request = await axiosInstance
        .get(`/channels/${encodeURIComponent(channel)}`);

        return request.data;
    } catch (error) {
        throw new Error(`${error}`)
    }
}

const getChannelList = async () =>
{
    try {
        const request = await axiosInstance
        .get('/channels');
        return request.data;
    } catch (error) {
        throw new Error(`${error}`)
    }
}
export {createChannel,getChannelInform,getChannelList};
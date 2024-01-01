import axiosInstance from './api';

import { CREATE_CHANNEL_BY_ADMIN_PATH,GET_CHANNEL_LIST_PATH,AUTH_CHECK  } from '@/utils/api_paths';

const createChannel = async (token: string, channelName : string, description : string)=>
{
    try {
        const adminCheck = await axiosInstance
        .get(AUTH_CHECK,{headers: {'Authorization': `bearer ${token}`}});

        if (adminCheck.data.role !== 'SuperAdmin')
            throw new Error('관리자권한이 없어서 채널 못 만듬');

        await axiosInstance
        .post(CREATE_CHANNEL_BY_ADMIN_PATH,{'authRequired' : false ,'description' : `${description}`, 'name' : `${channelName}`},{headers: {'Authorization': `bearer ${token}`}})
    } catch (error) {
        throw new Error(`${error}`)
    }
}

const getChannelInform = async (channel : string) =>
{
    try {
        const request = await axiosInstance
        .get(`${GET_CHANNEL_LIST_PATH}/${encodeURIComponent(channel)}`);

        return request.data;
    } catch (error) {
        throw new Error(`${error}`)
    }
}

const getChannelList = async () =>
{
    try {
        const request = await axiosInstance
        .get(GET_CHANNEL_LIST_PATH);
        return request.data;
    } catch (error) {
        throw new Error(`${error}`)
    }
}
export {createChannel,getChannelInform,getChannelList};
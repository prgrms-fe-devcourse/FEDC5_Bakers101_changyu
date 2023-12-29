import axiosInstance from './api';

async function createChannel(token: string, channelName : string, description : string)
{
    const adminCheck = await axiosInstance
    .get('/auth-user',{headers: {'Authorization': `bearer ${token}`}});

    if (adminCheck.data.role !== 'SuperAdmin')
        throw new Error('관리자권한이 없어서 채널 못 만듬');

    await axiosInstance
      .post('/channels/create',{'authRequired' : false ,'description' : `${description}`, 'name' : `${channelName}`},{headers: {'Authorization': `bearer ${token}`}})
      .then((res) => console.log(res));
}

export {createChannel}
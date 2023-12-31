import axiosInstance from './api';

async function getUserInform(id : string)
{
    const request = await axiosInstance
    .get(`/channels/${encodeURIComponent(id)}`);

    return request.data;
}

export {getUserInform};
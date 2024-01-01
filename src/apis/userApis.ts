import axiosInstance from './api';

const getUserInform = async (id : string) =>
{
    const request = await axiosInstance
    .get(`/users/${encodeURIComponent(id)}`);

    return request.data;
}

export {getUserInform};
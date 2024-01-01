import axiosInstance from './api';

const getUserInform = async (id : string) =>
{
    try{
        const request = await axiosInstance
        .get(`/users/${encodeURIComponent(id)}`);

        return request.data;
    } catch (error) {
    throw new Error(`${error}`)
    }
}

export {getUserInform};
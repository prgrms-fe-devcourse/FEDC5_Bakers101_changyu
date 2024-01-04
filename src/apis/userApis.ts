import axiosInstance from './api';

import { GET_USER_PROFILE_PATH } from '@/utils/api_paths';

async function getUserInform (id : string)
{
    try{
        const request = await axiosInstance
        .get(`${GET_USER_PROFILE_PATH}/${encodeURIComponent(id)}`);

        return request.data;
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export {getUserInform};

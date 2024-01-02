import { useState, useEffect } from 'react';

import { getUserInform } from '@/apis/userApis';

import CommentIcon from '@/assets/icons/comment.svg'
import HeartIcon from '@/assets/icons/following.svg'
import NoImage from '@/assets/temp/noImage.png'
import getPostLiveTime from '@/utils/getPostCreateTime';

type PostItemType = {

    postDetail : Post,
    index : number
}

const PostlItem = ({postDetail,index} : PostItemType) => {

    const { title, body } = JSON.parse(postDetail.title);
    const channelName = postDetail.channel.name;
    const authorName = postDetail.author.fullName;
    const likesNum = postDetail.likes.length; 
    const commentsNum = postDetail.comments.length; 
    const postImage = postDetail.image;
    const timeString = getPostLiveTime(postDetail.createdAt);

    const [isLoading, setIsLoading] = useState(false);
    const [userImg, setUserImg] = useState(null);

    useEffect(() => {
        (async () => {
        const request = await getUserInform(postDetail.author._id);
        if (!request.image) setUserImg(null);
        setUserImg(request.image);
        setTimeout(() => setIsLoading(true), index * 120);
        })();
      }, []);



    return (
        <div className ={`w-[21.5rem] h-[11.3rem] mx-auto bg-white my-8 transition-all duration-700 ease-in-out transform ${isLoading ? 'translate-y-[0%] opacaity-100':'translate-y-[80%] opacity-0'}`}>
            <div className ="flex justify-between mx-2 my-1">
                <div className ="flex gap-2">
                    {userImg ?
                     <img src = {userImg as string}
                        className ="'w-[1.4rem] h-[1.4rem] rounded-full"/>
                     : <p className ='w-[1.4rem] h-[1.4rem] bg-yellow-300 rounded-full '></p>}
                    <p className = "font-bold">{authorName}</p>
                    <p className ="my-auto font-bold text-purple-500 text-[0.6rem] ">팔로우 중</p>
                </div>
                <p className ="text-[0.7rem] font-semibold">{channelName}</p>
            </div>
            <div className ="flex mx-2 gap-3 my-2">
                {
                    postImage ?
                    <img 
                        src={postImage}
                        className ='w-[6rem] h-[5.5rem] bg-white rounded-md my-1'/>
                    :<img 
                        src={NoImage}
                        className ='w-[6rem] h-[5.5rem] bg-white rounded-md my-1 border-1'/>
                }
                <div className ="max-h-[4rem]">
                    <p className = "w-[11rem] max-h-[2rem] overflow-hidden text-ellipsis">{title}</p>
                    <p className="w-[11rem] max-h-[4rem] text-[0.7rem] overflow-hidden text-ellipsis">{body}</p>
                </div>
            </div>
            <div className ="flex justify-between w-full h-8 bg-white rounded-lg border-slate-100 border-1 px-3 drop-shadow-2xl">
                <div className ="flex gap-2 w-fit h-fit my-auto">
                    <div className ="flex gap-1">
                        <img className = "w-4 h-4 my-auto" src={HeartIcon}/>
                        <p className ="text-[0.9rem]">{likesNum}</p>
                    </div>
                    <div className ="flex gap-1">
                        <img className ="w-4 h-4 my-auto" src ={CommentIcon}/>
                        <p className ="text-[0.9rem]">{commentsNum}</p>
                    </div>
                </div>
                <p className ="w-fit h-fit my-auto text-[0.8rem]">{timeString}</p>
            </div>
        </div>
    )
}

export default PostlItem;
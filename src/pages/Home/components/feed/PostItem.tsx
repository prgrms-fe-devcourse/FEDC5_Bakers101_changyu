import { useEffect } from 'react';

import CommentIcon from '@/assets/icons/comment.svg'
import HeartIcon from '@/assets/icons/following.svg'

type PostItemType = {

    postDetail : {
    comments : Comment[],
    likes : Like[],
    image : string | null,
    imagePublicId : string | null,
    title : string,
    channel : Channel,
    author : User,
    _id : string,
    createdAt: string,
    updatedAt: string,
    }
}


const PostlItem = ({postDetail} : PostItemType) => {

    const { createdAt} = postDetail;
    const { title, body } = JSON.parse(postDetail.title);
    const channelName = postDetail.channel.name;
    const authorName = postDetail.author.fullName;
    const likesNum = postDetail.likes.length; 
    const commentsNum = postDetail.comments.length; 

    const timeString = getPostLiveTime();

    function getPostLiveTime() {
        const nowTime = new Date();
        const createdTime = new Date(createdAt);

        const compareTime = (nowTime.getFullYear() * 525600) -  (createdTime.getFullYear() * 525600) +
                            (nowTime.getMonth() * 43800) -  (createdTime.getMonth() * 43800) + 
                            (nowTime.getDate() * 1440) -  (createdTime.getDate() * 1440) + 
                            (nowTime.getHours() * 60) -  (createdTime.getHours() * 60) + 
                            (nowTime.getMinutes()) -  (createdTime.getMinutes());
        if (compareTime < 60 && compareTime >= 0) {
            return compareTime === 0 ? '0분 전' : `${Math.floor(compareTime)}분 전`
        }    
        else if (compareTime < 1440) {
            return `${Math.floor(compareTime / 60)}시간 전`
        }
        else {
            return `${createdTime.getFullYear().toString().slice(2,4)}.${createdTime.getMonth()+1}.${createdTime.getDate()}`;
        }
    }

    return (
        <div className ="w-[21.5rem] h-[11.3rem] mx-auto bg-white my-8">
            <div className ="flex justify-between mx-2 my-1">
                <div className ="flex gap-2">
                    <p className ='w-[1.4rem] h-[1.4rem] bg-yellow-300 rounded-full '></p>
                    <p className = "font-bold">{authorName}</p>
                    <p className ="my-auto font-bold text-purple-500 text-[0.6rem] ">팔로우 중</p>
                </div>
                <p className ="text-[0.7rem] font-semibold">{channelName}</p>
            </div>
            <div className ="flex mx-2 gap-3 my-2">
                <p className ='w-[6rem] h-[5.5rem] bg-yellow-300 rounded-md my-1'>이미지</p>
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
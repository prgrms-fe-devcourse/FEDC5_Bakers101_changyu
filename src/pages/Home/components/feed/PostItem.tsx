import { useEffect } from "react";

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
        if (compareTime < 1440)
            return `${Math.floor(compareTime / 60)}시간전`
        else 
            return `${createdTime.getFullYear().toString().slice(2,4)}.${createdTime.getMonth()+1}.${createdTime.getDate()}`;
    }

    useEffect(()=>{
    },[]);
    return (
        <div className ="w-[21.5rem] h-[11.3rem] mx-auto bg-white my-8">
            <div className ="flex justify-between mx-2 my-1">
                <div className ="flex gap-2">
                    <p className ='w-[1.4rem] h-[1.4rem] bg-yellow-300 rounded-full'></p>
                    <p>{authorName}</p>
                    <p>팔로우 중</p>
                </div>
                <p>{channelName}</p>
            </div>
            <div className ="flex mx-2 gap-3 my-2">
                <p className ='w-[6rem] h-[5.5rem] bg-yellow-300 rounded-md my-1'>이미지</p>
                <div className ="max-h-[4rem]">
                    <p>{title}</p>
                    <p className="w-[10rem] max-h-[3rem] text-[0.7rem]">{body}</p>
                </div>
            </div>
            <div className ="flex justify-between w-full h-8 bg-white rounded-lg border-slate-100 border-1 px-3 drop-shadow-2xl">
                <div className ="flex gap-2 w-fit h-fit my-auto">
                    <div className ="flex">
                        <p>좋아요</p>
                        <p>{likesNum}</p>
                    </div>
                    <div className ="flex">
                        <p>댓글</p>
                        <p>{commentsNum}</p>
                    </div>
                </div>
                <p className ="w-fit h-fit my-auto">{timeString}</p>
            </div>
        </div>
    )
}

export default PostlItem;
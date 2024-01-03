import getPostLiveTime from "@/utils/getPostCreateTime";

type PostHeaderType = {
    title : string,
    author : string,
    createAt : string,
    profileImg?: string,
}


const PostHeader = ({title, author, createAt, profileImg} : PostHeaderType) =>{
    return (
        <div className ="w-fit mx-auto">
            <div className = "w-[4rem] h-[4rem] overflow-hidden mx-auto rounded-full">
                <img 
                    className ="w-[4rem] h-[4rem] object-cover bg-black "
                    src ={profileImg} 
                    alt="profileimg"/>
            </div>
            <div className ="flex mx-auto gap-2 w-fit">          
                <p className ="font-semibold text-[1.1rem]">{author}</p>
                <p className ="text-[0.65rem] my-auto text-purple-500 font-medium">팔로잉 중</p>
            </div>
            <p className ="w-fit mx-auto text-[1.4rem] font-medium my-2">{title}</p>
            <p className ="my-2 w-fit mx-auto text-[0.8rem]">{getPostLiveTime(createAt)}</p>
            <div className ="flex w-fit mx-auto gap-3 my-3">
                <button className ="border-slate-200 border-1 px-3 py-1 rounded-lg bg-[#efb98b]">
                    수정
                </button>
                <button className ="border-slate-200 border-1 px-3 py-1 rounded-lg bg-[#efb98b]">
                    삭제
                </button>
            </div>
        </div>
    )
}

export default PostHeader;
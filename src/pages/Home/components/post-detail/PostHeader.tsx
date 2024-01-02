type PostHeaderType = {
    title : string,
    author : string,
    createAt : string,
    profileImg?: string,
}


const PostHeader = ({title, author, createAt, profileImg} : PostHeaderType) =>{
    return (
        <div className ="w-fit mx-auto">
            <img 
                className ="w-[4rem] h-[4rem] rounded-full"
                src ={profileImg} 
                alt="profileimg"/>
            <div className ="flex">          
                <p>{author}</p>
                <p>팔로잉 중</p>
            </div>
            <p>{title}</p>
            <p>{createAt}</p>
            <div className ="flex">
                <button>
                    수정
                </button>
                <button>
                    삭제
                </button>
            </div>
        </div>
    )
}

export default PostHeader;
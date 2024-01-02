import CommentIcon from '@/assets/icons/comment.svg'
import HeartIcon from '@/assets/icons/following.svg'
import NoImage from '@/assets/temp/noImage.png'

type PostBodyType = {
    body : string,
    likeNum : number,
    commentNum : number,
}


const PostBody = ({body, likeNum, commentNum} : PostBodyType) =>{
    return (
        <div className ="w-fit mx-auto">
            <p>{body}</p>
            <div className ="flex gap-1">
                    <div className = "flex gap-1">
                        <img className = "w-4 h-4 my-auto" src={HeartIcon}/>
                        <p className ="text-[0.9rem]">{likeNum}</p>
                    </div>
                    <div className ="flex gap-1">
                        <img className ="w-4 h-4 my-auto" src ={CommentIcon}/>
                        <p className ="text-[0.9rem]">{commentNum}</p>
                    </div>
                </div>
        </div>
    )
}

export default PostBody;
import { useState } from 'react'
import { createLike, deleteLike } from '@/apis/likes'

export interface LikeProps {
  _id: string
  user: string // 사용자 id
  post: string // 포스트 id
  createdAt: string
  updatedAt: string=
}
interface Props {
  likes: LikeProps[]
}

const LikeButton = ({ likes }: Props) => {
  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)


    const handleLike = async () => {
      try {
        if (!isLiked) {
          // 좋아요 누르기
          await createLike(postId) 
          setLikeCount((prevCount) => prevCount + 1)
          setIsLiked(true)
        } else {
          // 좋아요 취소하기
          await deleteLike(_id) 
          setLikeCount((prevCount) => prevCount - 1)
          setIsLiked(false)
        }
      } catch (error) {
        console.error('좋아요 처리 중 에러 발생:', error)
        
      }
      setIsLiked((prevIsLiked) => !prevIsLiked)
    }
  }

  return (
    <div>
      <button
        style={{
          cursor: 'pointer',
          border: 'none',
          display: 'flex',
          alignItems: 'center'
        }}
        onClick={handleLike}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: '5px' }}>
          <path
            d="M16.92 4.01322C16.5202 3.60554 16.0455 3.28215 15.523 3.0615C15.0004 2.84086 14.4404 2.72729 13.8748 2.72729C13.3092 2.72729 12.7492 2.84086 12.2267 3.0615C11.7042 3.28215 11.2294 3.60554 10.8296 4.01322L9.99979 4.85889L9.16999 4.01322C8.36235 3.19013 7.26695 2.72772 6.12477 2.72772C4.98259 2.72772 3.8872 3.19013 3.07955 4.01322C2.27191 4.83631 1.81818 5.95266 1.81818 7.11668C1.81818 8.28071 2.27191 9.39706 3.07955 10.2201L3.90936 11.0658L9.99979 17.2728L16.0902 11.0658L16.92 10.2201C17.3201 9.81266 17.6374 9.32885 17.8539 8.79635C18.0704 8.26385 18.1818 7.69309 18.1818 7.11668C18.1818 6.54028 18.0704 5.96952 17.8539 5.43702C17.6374 4.90452 17.3201 4.4207 16.92 4.01322Z"
            stroke="#767676"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill={isLiked ? '#e74c3c' : 'none'}
          />
        </svg>
        <span>{likeCount}</span>
      </button>
    </div>
  )
}

export default LikeButton

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import PostEditHeader from './components/Header'
import handleImageFormData from '@/utils/handleImageFormData'
import { getPostDetail, updatePost } from '@/apis/postApis'

const PostEdit = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [details, setDetails] = useState<string>('')
  const [postDetails, setPostDetails] = useState<Post>()
  const params = useParams()
  const productId = params.id

  useEffect(() => {
    ;(async () => {
      if (!productId) return
      const details = await getPostDetail(productId)
      setPostDetails(details)
      await setTitle(JSON.parse(details.title).title)
      await setDetails(JSON.parse(details.title).body)
    })()
  }, [])

  async function onClickEditButton() {
    const formData = handleImageFormData({
      imageFile: postDetails?.image,
      title: title,
      type: 'Post',
      body: details,
      channelId: postDetails?.channel._id,
      postId: postDetails?._id
    })
    await updatePost(import.meta.env.VITE_API_KEY, formData)
    navigate(`/post-detail/${postDetails?._id}`)
  }

  return (
    <div>
      <PostEditHeader onClickSubmitButtn={onClickEditButton} />
      <div className="w-fit mx-auto">
        <input
          className="w-[20rem] mx-auto  my-2 text-[1.4rem] border-2 border-gray-300 font-medium"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mx-auto w-fit">
        <input
          className="w-[20rem] mx-auto min-h-[40rem] border-2 border-gray-300"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        />
      </div>
    </div>
  )
}

export default PostEdit

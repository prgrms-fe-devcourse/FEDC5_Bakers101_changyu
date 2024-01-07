import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import TextEditor from '@/components/text-editor/TextEditor'
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
          className="w-[20rem] h-12 mx-auto px-2 my-2 text-[1.2rem] border-2 border-gray-300 font-medium"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextEditor
          className="w-full h-[36rem] min-h-[36rem]"
          setText={setDetails}
          value={details}
        />
      </div>
    </div>
  )
}

export default PostEdit

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PostEditHeader from './components/Header'
import handleImageFormData from '@/utils/handleImageFormData'
import { getPostDetail, updatePost } from '@/apis/postApis'

const PostEdit = () => {
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

  function onClickEditButton() {
    // const formData = handleImageFormData({ imageFile: file as File, title : title, type :'Post',body: detail, channelId : channelId._id});

    const formData = handleImageFormData({
      imageFile: '',
      title: title,
      type: 'Post',
      body: details,
      channelId: postDetails?.channel._id,
      postId: postDetails?._id
    })
    updatePost(import.meta.env.VITE_API_KEY, formData)
  }

  return (
    <div className="w-fit mx-auto">
      <PostEditHeader onClickSubmitButtn={onClickEditButton} />
      <div>
        <div className="w-[10rem] h-[4rem] overflow-hidden mx-auto rounded-full"></div>
        <input
          className="w-[16rem] mx-auto  my-2 text-[1.4rem] border-1 border-black font-medium"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mx-auto">
        <input
          className="w-[16rem] mx-auto min-h-[26rem] border-1 border-black"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        />
      </div>
    </div>
  )
}

export default PostEdit

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PostEditHeader from './components/Header'
import handleImageFormData from '@/utils/handleImageFormData'
import { getPostDetail, updatePost } from '@/apis/postApis'

const PostEdit = () => {
  const [title, setTitle] = useState<string>('')
  const [details, setDetails] = useState<string>('')
  const [channelId, setChannelId] = useState<string>('')
  const [file, setFiles] = useState<File>()

  const params = useParams()
  const productId = params.id

  useEffect(() => {
    (async () => {
      if (!productId) return
      const details = await getPostDetail(productId)
      setChannelId(details._channelId)
      await setFiles(details.image)
      await setTitle(JSON.parse(details.title).title)
      await setDetails(JSON.parse(details.title).body)
    })()
  }, [])

  function onClickEditButton() {
   // const formData = handleImageFormData({ imageFile: file as File, title : title, type :'Post',body: detail, channelId : channelId._id});

    const formData = handleImageFormData({
      imageFile: file as File,
      title: title,
      type: 'Post',
      body: details,
      channelId: channelId
    })
    console.log(formData)
    updatePost(import.meta.env.VITE_API_KEY, formData).then((c) =>
      console.log(c)
    )
  }

  return (
    <div className="w-fit mx-auto">
      <PostEditHeader />
      <div>
        <div className="w-[10rem] h-[4rem] overflow-hidden mx-auto rounded-full"></div>
        <input
          className="w-fit mx-auto  my-2 text-[1.4rem] border-1 border-black font-medium"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mx-auto px-2">
        <input
          className="w-[10rem] min-h-[26rem] border-1 border-black"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        />
      </div>
      <button onClick={onClickEditButton}>추가</button>
    </div>
  )
}

export default PostEdit

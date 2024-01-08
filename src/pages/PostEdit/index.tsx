import tw, { styled } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import PostEditHeader from './components/Header'
import handleImageFormData from '@/utils/handleImageFormData'
import { getPostDetail, updatePost } from '@/apis/postApis'

const breadOptions = ['조리빵', '특수빵', '식빵', '과자빵']

const ChannelOptionsWrapper = styled.div`
  ${tw`mx-auto w-fit`}
`

const ChannelButton = styled.button(({ indexItem, selectedBread }) => [
  tw`w-16 py-1 font-bold rounded-full`,
  indexItem === selectedBread
    ? tw`bg-[#9F8170] text-white`
    : tw`bg-[#F3F3F3] text-[#926B58]`
])

type BreadType = '조리빵' | '특수빵' | '식빵' | '과자빵' | null

const PostEdit = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [details, setDetails] = useState<string>('')
  const [postDetails, setPostDetails] = useState<Post>()
  const [selectedBread, setSelectedBread] = useState<BreadType>(null)
  const params = useParams()
  const productId = params.id

  useEffect(() => {
    ;(async () => {
      if (!productId) return
      const details = await getPostDetail(productId)
      setPostDetails(details)
      setSelectedBread(details.channel.name)
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
      </div>
      <ChannelOptionsWrapper>
        <p className="text-[0.625rem] mt-6 mb-1 text-[#959595]">
          어떤 종류의 빵인가요?* 1개 선택
        </p>
        <div className="flex gap-2">
          {breadOptions.map((item, index) => (
            <ChannelButton
              indexItem={item}
              selectedBread={selectedBread}
              key={index}
              onClick={() => setSelectedBread(item as BreadType)}>
              {item}
            </ChannelButton>
          ))}
        </div>
      </ChannelOptionsWrapper>

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

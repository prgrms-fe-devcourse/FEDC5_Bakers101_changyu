import { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { useNavigate } from 'react-router-dom'

import CreatePostHeader from './components/Header'
import { createPost } from '@/apis/postApis'
import { getChannelInform } from '@/apis/channelApis'
import FileUploadIcon from '@/assets/icons/fileUpload.svg'
import handleImageFormData from '@/utils/handleImageFormData'

const breadOptions = ['조리빵', '특수빵', '식빵', '과자빵']

const PostCreateContainer = styled.div`
  ${tw`w-screen`}
`
const PostBodyInput = styled.input`
  ${tw`w-[20rem] min-h-[39rem] mt-6 border-2 border-[#959595] mb-10`}
`
const PostInputsWrapper = styled.div`
  ${tw`w-fit mx-auto`}
`
const ChannelOptionsWrapper = styled.div``

const PostTitleImageInputWrapper = styled.div`
  ${tw`flex mb-1`}
`
const PostTitleInputWrapper = styled.div`
  ${tw`mb-[2.7rem]`}
`

const ChannelButton = styled.button(({ indexItem, selectedBread }) => [
  tw`w-16 py-1 font-bold rounded-full`,
  indexItem === selectedBread
    ? tw`bg-[#9F8170] text-white`
    : tw`bg-[#F3F3F3] text-[#926B58]`
])

type BreadType = '조리빵' | '특수빵' | '식빵' | '과자빵' | null

const PostCreation = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [detail, setDetail] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [selectedBread, setSelectedBread] = useState<BreadType>(null)

  const onClickEnrollPost = async () => {
    if (selectedBread === null) return

    const channelId = await getChannelInform(selectedBread)
    const formData = handleImageFormData({
      imageFile: file as File,
      title: title,
      type: 'Post',
      body: detail,
      channelId: channelId._id
    })
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    await createPost(parsedToken, formData)
    navigate('/')
  }

  const onClickUploadImage = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'image/gif, image/jpeg,image/png,image/jpg'

    fileInput.onchange = (e: Event) => {
      if (!e.target) return
      const target = e.target as HTMLInputElement
      if (!target.files || !target.files[0]) return

      setFile(target.files[0])
    }
    fileInput.click()
  }

  return (
    <PostCreateContainer>
      <CreatePostHeader />
      <PostInputsWrapper>
        <PostTitleInputWrapper>
          <input
            placeholder="어떤 레시피인가요?"
            className="mb-2 mx-2 min-w-[19rem]"
            onChange={(e) => setTitle(e.target.value)}
          />
          <hr />
        </PostTitleInputWrapper>
        <PostTitleImageInputWrapper>
          <p className="mt-2 mx-2 w-[16.8rem] text-[#959595] overflow-hidden text-ellipsis">
            {file ? file.name : '빵 이미지를 첨부 해주세요.'}
          </p>
          <button
            className="pb-2"
            onClick={onClickUploadImage}>
            <img src={FileUploadIcon} />
          </button>
        </PostTitleImageInputWrapper>
        <hr />
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
        <PostBodyInput
          placeholder="레시피를 알려주세요."
          onChange={(e) => setDetail(e.target.value)}
        />
      </PostInputsWrapper>
      <button
        onClick={onClickEnrollPost}
        className="fixed w-fit left-1/2 transform -translate-x-1/2 bottom-4 text-[1.1rem] bg-white font-bold px-6 py-2 rounded-full drop-shadow-lg border-1 border-slate-100 ">
        등록하기
      </button>
    </PostCreateContainer>
  )
}
export default PostCreation

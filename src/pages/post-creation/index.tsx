import { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { useNavigate } from 'react-router-dom'


import CreatePostHeader from './components/header'
import TextEditor from '@/components/text-editor'

import { createPost } from '@/apis/postApis'
import { getChannelInform } from '@/apis/channelApis'
import FileUploadIcon from '@/assets/icons/fileUpload.svg'
import handleImageFormData from '@/utils/handleImageFormData'
import onGetImageFile from '@/utils/onGetImageFile'

const breadOptions = ['조리빵', '특수빵', '식빵', '과자빵']

const PostCreateContainer = styled.div`
  ${tw`w-screen`}
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
  const [file, setFile] = useState<File | undefined>()
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
    await createPost(formData)
    navigate('/')
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
            onClick={() => onGetImageFile((newImage) => setFile(newImage))}>
            <img src={FileUploadIcon} />
          </button>
        </PostTitleImageInputWrapper>
        <hr />
        <ChannelOptionsWrapper>
          <p className="text-[0.625rem] mt-6 mb-2 text-[#959595]">
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
        <TextEditor
          setText={setDetail}
          className="my-4 w-full h-[30rem] min-h-[30rem]"
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

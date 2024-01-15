import tw, { styled } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import TextEditor from '@/components/text-editor'
import PostEditHeader from './components/Header'
import onGetImageFile from '@/utils/onGetImageFile'
import InputWarningModal from '../post-creation/components/InputWarningModal'

import handleImageFormData from '@/utils/handleImageFormData'
import getPostDetail from '@/apis/post/getPostDetail'
import updatePost from '@/apis/post/updatePost'
import FileUploadIcon from '@/assets/icons/fileUpload.svg'

type BreadType = '조리빵' | '특수빵' | '식빵' | '과자빵' | null

type ChannelButtonType = {
  indexItem: string
  selectedBread: BreadType
}

const breadOptions = ['조리빵', '특수빵', '식빵', '과자빵']

const PostTitleImageInputWrapper = styled.div`
  ${tw`flex mb-1`}
`
const ChannelOptionsWrapper = styled.div``

const ChannelButton = styled.button<ChannelButtonType>(
  ({ indexItem, selectedBread }) => [
    tw`w-16 py-1 font-bold rounded-full`,
    indexItem === selectedBread
      ? tw`bg-[#9F8170] text-white`
      : tw`bg-[#F3F3F3] text-[#926B58]`
  ]
)
const PostInputsWrapper = styled.div`
  ${tw`w-[80%] mx-auto`}
`

const PostEdit = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [details, setDetails] = useState<string>('')
  const [postDetails, setPostDetails] = useState<Post>()
  const [image, setImage] = useState<string | File | undefined>()
  const [selectedBread, setSelectedBread] = useState<BreadType>(null)
  const [isOpenInputWarningModal, setIsOpenInputWarningModal] = useState(false)
  const params = useParams()
  const productId = params.id

  useEffect(() => {
    ;(async () => {
      if (!productId) return
      const details = await getPostDetail(productId)
      setPostDetails(details)
      setSelectedBread(details.channel.name)
      setImage(details.image)
      await setTitle(JSON.parse(details.title).title)
      await setDetails(JSON.parse(details.title).body)
    })()
  }, [])

  async function onClickEditButton() {
    if (selectedBread === null || title.length < 2 || details.length < 2) {
      setIsOpenInputWarningModal(true)
      return
    }

    const formData = handleImageFormData({
      imageFile: image,
      title: title,
      type: 'Post',
      body: details,
      channelId: postDetails?.channel._id,
      postId: postDetails?._id
    })
    await updatePost(formData)
    navigate(`/post-detail/${postDetails?._id}`)
  }

  return (
    <div>
      <PostEditHeader onClickSubmitButtn={onClickEditButton} />
      <PostInputsWrapper>
        <div className="w-fit mx-auto">
          <input
            className="w-[20rem] h-12 mx-auto px-2 text-[1.2rem] font-medium"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <hr className="mb-4" />
        <PostTitleImageInputWrapper>
          <p className="mt-2 mx-2 w-[16.8rem] text-[#959595] overflow-hidden text-ellipsis">
            {image
              ? image.name
                ? image.name
                : '등록된 이미지가 있습니다'
              : '빵 이미지를 첨부 해주세요.'}
          </p>
          <button
            className="pb-2"
            onClick={() => onGetImageFile((newImage) => setImage(newImage))}>
            <img src={FileUploadIcon} />
          </button>
        </PostTitleImageInputWrapper>
        <hr className="mb-4" />
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
        <TextEditor
          setText={setDetails}
          initialValue={details}
          className="h-[40rem] mt-6 w-full mx-auto"
        />
        {isOpenInputWarningModal && (
          <InputWarningModal
            setCloseModal={() => setIsOpenInputWarningModal(false)}
            titleLength={title.length}
            detailLength={details.length}
            selectedBread={selectedBread}
          />
        )}
      </PostInputsWrapper>
    </div>
  )
}

export default PostEdit

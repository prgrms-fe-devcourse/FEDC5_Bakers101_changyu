import tw, { styled } from 'twin.macro'

const InputWarningModalContainer = styled.div`
  ${tw`w-[16.5rem] py-4 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2
       bg-white text-center border-2 border-slate-400`}
`

const warningMesage = {
  titleMin: '제목을 최소 2글자 이상 작성해주세요.',
  titleMax: '제목을 최대 20글자 미만 작성해주세요.',
  noBreadChannel: '글을 올리실 채널을 선택해주세요.',
  noDetail: '본문을 작성해주세요.'
}

interface InputWarningModal {
  setCloseModal: () => void
  titleLength: number
  selectedBread: string | null
  detailLength: number
}

const InputWarningModal = ({
  setCloseModal,
  titleLength,
  detailLength,
  selectedBread
}: InputWarningModal) => {
  const getWarningMesage = () => {
    if (titleLength < 2) return warningMesage['titleMin']
    else if (titleLength > 19) return warningMesage['titleMax']
    else if (!selectedBread) return warningMesage['noBreadChannel']
    else if (!detailLength) return warningMesage['noDetail']
  }

  return (
    <InputWarningModalContainer>
      <p className="my-2">{getWarningMesage()}</p>
      <button
        className="border-1 border-slate-300 px-2 py-1 rounded-md"
        onClick={setCloseModal}>
        확인
      </button>
    </InputWarningModalContainer>
  )
}

export default InputWarningModal

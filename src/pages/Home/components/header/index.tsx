import tw, {styled} from 'twin.macro'

import AlarmIcon from '@/assets/icons/notification.svg'
import SearchIcon from '@/assets/icons/search.svg'
import TriangleIcon from '@/assets/icons/triangle.svg'


const HomeHeaderContainer = styled.div`
    ${tw`flex justify-between mx-4`}
`

const HomeHeaderButtonsWrapper = styled.div`
    ${tw`flex gap-3 h-fit my-[1.3rem]`}
`

const ChannelSelectButtonsWrapper = styled.div`
    ${tw`flex gap-2 mt-3`}
`

type HomeHeaderProps = {
    selectedChannel : string,
    onClickChannelList: () => void;
  };

  
const HomeHeader = ({selectedChannel, onClickChannelList} : HomeHeaderProps) =>{

    return (
        <HomeHeaderContainer>
            <ChannelSelectButtonsWrapper>
                <button
                    className = "flex gap-2" 
                    onClick ={onClickChannelList}> 
                    <p className ="text-[#957969] text-[1.375rem] font-bold">{selectedChannel}</p>
                    <img
                        className ="h-fit my-[0.6rem] " 
                        src ={TriangleIcon}/>
                </button>
            </ChannelSelectButtonsWrapper>
            <HomeHeaderButtonsWrapper>
                <button>
                    <img src ={SearchIcon}/>
                </button>
                <button>
                    <img src ={AlarmIcon}/>
                </button>
            </HomeHeaderButtonsWrapper>
        </HomeHeaderContainer>
    )
}

export default HomeHeader;

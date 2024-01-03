import { useEffect } from 'react'

import AlarmIcon from '@/assets/icons/notification.svg'
import SearchIcon from '@/assets/icons/search.svg'
import TriangleIcon from '@/assets/icons/triangle.svg'

type HomeHeaderProps = {
    selectedChannel : string,
    onClickChannelList: () => void;
  };

  
const HomeHeader = ({selectedChannel, onClickChannelList} : HomeHeaderProps) =>{

    return (
        <div className ="flex justify-between mx-4">
            <div className ="flex gap-2 mt-3">
                <button
                    className = "flex gap-2" 
                    onClick ={onClickChannelList}> 
                    <p className ="text-[#957969] text-[1.375rem] font-bold">{selectedChannel}</p>
                    <img
                        className ="h-fit my-[0.6rem] " 
                        src ={TriangleIcon}/>
                </button>
            </div>
            <div className ="flex gap-3 h-fit my-[1.3rem]">
                <button>
                    <img src ={SearchIcon}/>
                </button>
                <button>
                    <img src ={AlarmIcon}/>
                </button>
            </div>
        </div>
    )
}

export default HomeHeader;

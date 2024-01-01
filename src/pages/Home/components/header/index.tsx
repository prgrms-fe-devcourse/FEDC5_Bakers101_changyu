import { useEffect } from 'react'

import AlarmIcon from '@/assets/icons/notification.svg'
import SearchIcon from '@/assets/icons/search.svg'
import TriangleIcon from '@/assets/icons/triangle.svg'

type HomeHeaderProps = {
    selectedChannel : string,
    onClickChanneList: () => void;
  };

  
const HomeHeader = ({selectedChannel, onClickChanneList} : HomeHeaderProps) =>{

    useEffect(()=>{

    },[]);

    return (
        <div className="flex justify-between mx-4">
            <div className ="flex gap-2 mt-3">
                <p className ="text-[#957969] text-[1.375rem] font-bold">{selectedChannel}</p>
                <button onClick ={onClickChanneList}> 
                    <img src ={TriangleIcon}/>
                </button>
            </div>
            <div className ="flex gap-3">
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
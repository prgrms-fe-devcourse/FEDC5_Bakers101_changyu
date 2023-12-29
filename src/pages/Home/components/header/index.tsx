import { useEffect } from 'react'

type HomeHeaderProps = {
    selectedChannel : string,
    onClickChanneList: () => void;
    onClickCreate : () => void;
  };

  
const HomeHeader = ({selectedChannel, onClickChanneList,onClickCreate} : HomeHeaderProps) =>{

    useEffect(()=>{

    },[]);

    return (
        <div className="flex justify-between mx-4">
            <div className ="flex">
                <p className ="text-[#957969] text-[1.375rem] font-bold">{selectedChannel}</p>
                <button onClick ={onClickChanneList}> 채널선택 </button>
            </div>
            <div className ="flex gap-2">
                <button>검색</button>
                <button onClick ={onClickCreate}>알림</button>
            </div>
        </div>
    )
}

export default HomeHeader;
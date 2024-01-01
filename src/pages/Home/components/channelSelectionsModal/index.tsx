import { useState, useEffect } from 'react';

import { getChannelList } from '@/apis/channelApis';

type ChannelSelectionModal = {
    setNowChannel : React.Dispatch<React.SetStateAction<ChannelListItemType>>;
    setIsChannelSelectionsModalOpen : React.Dispatch<React.SetStateAction<boolean>>; 
}

type ChannelListItemType = {
    name : string,
    _id?: string,
}

const ChannelSelectionModal = ({setNowChannel, setIsChannelSelectionsModalOpen} : ChannelSelectionModal) => {

    const [channelList, setChannelList] = useState<ChannelListItemType[]>([]);
    useEffect(()=>{
         const getChannels = async () =>{
            const channelListRequest = await getChannelList();
            setChannelList([{name : '전체 채널', id : null},...channelListRequest]);
         }
         getChannels();
    },[]);

    
    const onClickChannelButton = async(index : number) =>
    {
        const selectedChannelName = {name : channelList[index].name ,id : channelList[index]._id};
        setNowChannel(selectedChannelName);
        setIsChannelSelectionsModalOpen(false);
    }

    return (
        <div className ="absolute z-10 w-36 h-fit mx-2  bg-white flex flex-col drop-shadow-2xl">
            { channelList.length > 1 ? 
                channelList.map(({name} : ChannelListItemType, index)=>(
                    <button 
                        key ={index}
                        onClick = {()=>onClickChannelButton(index)}
                        className ="h-8">
                        {name}
                    </button>
                )) : 
                null
            }
        </div>
    );
}

export default ChannelSelectionModal;
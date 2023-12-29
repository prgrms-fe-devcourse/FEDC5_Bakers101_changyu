import { useState, useEffect } from 'react';
import getChannelList from '@/apis/getChannelList';

type ChannelSelectionModal ={
    setNowChannel : React.Dispatch<React.SetStateAction<string>>;
}

type ChannelListItemType = {
    name : string,
}

const ChannelSelectionModal = ({setNowChannel} : ChannelSelectionModal) => {

    const [channelList, setChannelList] = useState<ChannelListItemType[]>([]);
    useEffect(()=>{
         const getChannels = async () =>{
            const channelListRequest = await getChannelList();
            setChannelList([{name : '전체보기'},...channelListRequest]);
         }
         getChannels();
    },[]);

    const onClickChannelButton = (index : number) =>
    {
        const selectedChannelName = channelList[index].name as string;
        setNowChannel(selectedChannelName);
    }

    return (
        <div className ="absolute z-10 w-screen h-96 bg-yellow-300 flex gap-2">
            { channelList.length > 1 ? 
                channelList.map(({name} : ChannelListItemType, index)=>(
                    <button key ={index} onClick = {()=>onClickChannelButton(index)}>
                        {name}
                    </button>
                )) : 
                null
            }
        </div>
    );
}

export default ChannelSelectionModal;
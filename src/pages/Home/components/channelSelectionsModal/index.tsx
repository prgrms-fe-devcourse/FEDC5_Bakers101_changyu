import { useState, useEffect } from 'react';
import getChannelList from '@/apis/getChannelList';

type ChannelSelectionModal ={
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
            setChannelList([{name : '전체보기', id : null},...channelListRequest]);
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
        <div className ="w-screen h-96 bg-yellow-300 flex gap-2">
            <li>
            { channelList.length > 1 ? 
                channelList.map(({name} : ChannelListItemType, index)=>(
                    <option key ={index} onClick = {()=>onClickChannelButton(index)}>
                        {name}
                    </option>
                )) : 
                null
            }
            </li>
        </div>
    );
}

export default ChannelSelectionModal;
import { useState, useEffect } from 'react';
import ChannelSelectionModal from './components/channelSelectionsModal';

const Home = () =>{

    const [isChannelSelectionsModalOpen,setIsChannelSelectionsModalOpen] = useState(false);
    const [nowChannel,setNowChannel] = useState<string>('전체보기');

    useEffect(()=>{
        console.log(nowChannel);
    },[nowChannel]);

    return (
        <div>
            <button onClick={()=>setIsChannelSelectionsModalOpen((isOpen)=>!isOpen)}>{nowChannel}</button>
            {isChannelSelectionsModalOpen ? 
                <ChannelSelectionModal setNowChannel ={setNowChannel}/>
                :
                null
            }

        </div>
    );
}

export default Home;
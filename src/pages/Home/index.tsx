import { useState, useEffect } from 'react';
import ChannelSelectionModal from './components/channelSelectionsModal';
import PostList from './components/feed/PostList';
import HomeHeader from './components/header';

type nowChannelType = {
    name : string,
    id?: string,
}


const Home = () =>{

    const [isChannelSelectionsModalOpen,setIsChannelSelectionsModalOpen] = useState(false);
    const [nowChannel,setNowChannel] = useState<nowChannelType>({name :'전체보기', id : undefined});

    useEffect(()=>{
    },[nowChannel]);

    return (
        <div>
            <HomeHeader selectedChannel = {nowChannel.name} onClick={()=>{setIsChannelSelectionsModalOpen((isOpen)=>!isOpen);console.log('*')}}/>
            {isChannelSelectionsModalOpen ? 
                <ChannelSelectionModal setNowChannel ={setNowChannel} setIsChannelSelectionsModalOpen = {setIsChannelSelectionsModalOpen}/>
                :
                null
            }
            <PostList title = {nowChannel.name} id = {nowChannel.id}/>
        </div>
    );
}

export default Home;
import { useState, useEffect } from 'react';

import ChannelSelectionModal from './components/channelSelectionsModal';
import PostList from './components/feed/PostList';
import HomeHeader from './components/header';
import CreatePost from './components/createPost';
import HomeBottomNavBar from './components/bottom-navbar';


type nowChannelType = {
    name : string,
    id?: string,
}


const Home = () =>{

    const [isChannelSelectionsModalOpen,setIsChannelSelectionsModalOpen] = useState(false);
    const [nowChannel,setNowChannel] = useState<nowChannelType>({name :'전체 채널', id : undefined});
    const [nowCreate,setNowCreate] = useState<boolean>(false);

    useEffect(()=>{
    },[nowChannel]);

    return (
        <div>
            {nowCreate ? <CreatePost setNowCreate = {setNowCreate}/> 
                : 
                <HomeHeader 
                    selectedChannel = {nowChannel.name} 
                    onClickChanneList={()=>{setIsChannelSelectionsModalOpen((isOpen)=>!isOpen)}}/>                
            }
            {isChannelSelectionsModalOpen ? 
                <ChannelSelectionModal setNowChannel ={setNowChannel} setIsChannelSelectionsModalOpen = {setIsChannelSelectionsModalOpen}/>
                : null
            }
            {
                !nowCreate ?
                     <div>
                        <PostList title = {nowChannel.name} id = {nowChannel.id}/>
                        <HomeBottomNavBar onClickCreate={()=>setNowCreate(true)}/>                
                     </div>
                     : null
            }
        </div>
    );
}

export default Home;
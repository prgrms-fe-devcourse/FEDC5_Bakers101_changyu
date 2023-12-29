import { useState, useEffect } from 'react';
import ChannelSelectionModal from './components/channelSelectionsModal';
import PostList from './components/feed/PostList';
import HomeHeader from './components/header';
import CreatePost from './components/createPost';
type nowChannelType = {
    name : string,
    id?: string,
}


const Home = () =>{

    const [isChannelSelectionsModalOpen,setIsChannelSelectionsModalOpen] = useState(false);
    const [nowChannel,setNowChannel] = useState<nowChannelType>({name :'전체보기', id : undefined});
    const [nowCreate,setNowCreate] = useState<boolean>(false);

    useEffect(()=>{
    },[nowChannel]);

    return (
        <div>
            {nowCreate ? <CreatePost setNowCreate = {setNowCreate}/> 
                : 
                <HomeHeader 
                    selectedChannel = {nowChannel.name} 
                    onClickChanneList={()=>{setIsChannelSelectionsModalOpen((isOpen)=>!isOpen)}}
                    onClickCreate={()=>setNowCreate(true)}/>
                
            }
            {isChannelSelectionsModalOpen ? 
                <ChannelSelectionModal setNowChannel ={setNowChannel} setIsChannelSelectionsModalOpen = {setIsChannelSelectionsModalOpen}/>
                : null
            }
            {
                !nowCreate ?
                     <PostList title = {nowChannel.name} id = {nowChannel.id}/>
                     : null
            }
        </div>
    );
}

export default Home;
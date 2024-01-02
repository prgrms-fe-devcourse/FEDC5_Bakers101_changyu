import { useState, useEffect } from 'react';
import ChannelSelectionModal from './components/channelSelectionsModal';
import PostList from './components/feed/PostList';
import HomeHeader from './components/header';
import CreatePost from './components/createPost';
import HomeBottomNavBar from './components/bottom-navbar';
import PostDetail from './components/post-detail';

type nowChannelType = {
    name : string,
    id?: string,
}


const Home = () =>{

    const [isChannelSelectionsModalOpen,setIsChannelSelectionsModalOpen] = useState(false);
    const [nowChannel,setNowChannel] = useState<nowChannelType>({name :'전체 채널', id : undefined});
    const [nowCreate,setNowCreate] = useState<boolean>(false);
    const [isOpenPostDetailPage, setIsOpenPostDetailPage] = useState(false);
    const [detailPageId,setDetailPageId] = useState<string|null>(null);

    useEffect(()=>{
    },[nowChannel]);

    return (
        <div>
            {nowCreate ? <CreatePost setNowCreate = {setNowCreate}/> 
                : !isOpenPostDetailPage ? 
                <HomeHeader 
                    selectedChannel = {nowChannel.name} 
                    onClickChanneList={()=>{setIsChannelSelectionsModalOpen((isOpen)=>!isOpen)}}/>  
                    : null          
            }
            {isChannelSelectionsModalOpen ? 
                <ChannelSelectionModal setNowChannel ={setNowChannel} setIsChannelSelectionsModalOpen = {setIsChannelSelectionsModalOpen}/>
                : null
            }
            {
                nowCreate ?
                     null
                     : isOpenPostDetailPage ? 
                     <PostDetail id ={detailPageId}/>
                     : <div>
                     <PostList 
                         title = {nowChannel.name} 
                         id = {nowChannel.id}
                         onClickPostItem ={(id)=> {setIsOpenPostDetailPage(true)
                                                    setDetailPageId(id)}}/>
                     <HomeBottomNavBar onClickCreate={()=>setNowCreate(true)}/>                
                  </div>
            }
        </div>
    );
}

export default Home;
import { useState } from 'react';

const Home = () =>{

    const [isChannelSelectionsModalOpen,setIsChannelSelectionsModalOpen] = useState(false);

    return (
        <div>
            <button onClick={()=>setIsChannelSelectionsModalOpen((isOpen)=>!isOpen)}>전체보기</button>
            {isChannelSelectionsModalOpen ? 
                <div>
                    
                </div> 
                : null    
            }

        </div>
    );
}

export default Home;
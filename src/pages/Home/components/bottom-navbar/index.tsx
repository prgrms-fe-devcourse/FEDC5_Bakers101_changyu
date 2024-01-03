import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

import WriteIcon from '@/assets/icons/write.svg';
import UserListIcon from '@/assets/icons/userlist.svg';
import ProfileIcon from '@/assets/icons/profile.svg';
import ScrollTopIcon from '@/assets/icons/scrollTop.svg';

const HomeBottomNavBarContainer = styled.div`
  ${tw`fixed left-1/2 transform -translate-x-1/2 bottom-4 flex gap-3 z-10 bg-white w-48 h-10 justify-center rounded-full drop-shadow-2xl`}
`

const HomeBottomNavBar = () =>{

    return (
        <HomeBottomNavBarContainer>
            <button>
                <img className = "w-5 h-5 my-auto" src={ProfileIcon}/>
            </button>
            <button>           
                <img className = "w-6 h-7 my-auto" src={UserListIcon}/>
            </button>
            <button>           
                <img className = "w-6 h-7 my-auto" src={ScrollTopIcon}/>
            </button>
            <Link to ='/postcreation' className ="h-fit my-auto">
                <img className = "w-6 h-6" src={WriteIcon}/>
            </Link>
        </HomeBottomNavBarContainer>
    )
}
export default HomeBottomNavBar;

import WriteIcon from '@/assets/icons/write.svg';
import UserListIcon from '@/assets/icons/userlist.svg';
import ProfileIcon from '@/assets/icons/profile.svg';
import ScrollTopIcon from '@/assets/icons/scrollTop.svg';

type HomeBottomNavBar = {
    onClickCreate : () => void;
  };
 

const HomeBottomNavBar = ({onClickCreate} : HomeBottomNavBar) =>{

    return (
        <div className ='fixed left-1/2 transform -translate-x-1/2 bottom-4 flex gap-3 z-11 bg-white w-48 h-10 justify-center rounded-full drop-shadow-2xl'>
            <img className = "w-5 h-5 my-auto" src={ProfileIcon}/>
            <img className = "w-6 h-7 my-auto" src={UserListIcon}/>
            <img className = "w-6 h-7 my-auto" src={ScrollTopIcon}/>
            <button onClick ={onClickCreate}>
                <img className = "w-6 h-6 my-auto" src={WriteIcon}/>
            </button>
        </div>
    )
}

export default HomeBottomNavBar;
import PrevBrownIcon from '@/assets/icons/prev_brown.svg'

type CreatePostHeaderTypes = {
    onClickCreate : () => void;
  };


const CreatePostHeader = ({onClickCreate} : CreatePostHeaderTypes) =>{
    return (
        <div>
            <button 
                className ="mx-2 my-2 h-[3.125rem]"
                onClick ={onClickCreate}><img src={PrevBrownIcon}/>
            </button>
        </div>
    )
}

export default CreatePostHeader
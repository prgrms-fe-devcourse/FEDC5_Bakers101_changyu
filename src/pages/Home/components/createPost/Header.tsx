type CreatePostHeaderTypes = {
    onClickCreate : () => void;
  };


const CreatePostHeader = ({onClickCreate} : CreatePostHeaderTypes) =>{
    return (
        <div>
            <button 
                className ="mx-2 my-2 h-[3.125rem]"
                onClick ={onClickCreate}>뒤로가기</button>
        </div>
    )
}

export default CreatePostHeader
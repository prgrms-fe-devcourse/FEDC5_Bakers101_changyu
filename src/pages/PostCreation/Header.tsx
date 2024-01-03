import PrevBrownIcon from '@/assets/icons/prev_brown.svg'

const CreatePostHeader = () =>{
    return (
        <div>
            <button className ="mx-2 my-2 h-[3.125rem]">
                <img src={PrevBrownIcon}/>
            </button>
        </div>
    )
}

export default CreatePostHeader

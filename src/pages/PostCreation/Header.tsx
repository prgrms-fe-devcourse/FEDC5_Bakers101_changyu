import { Link } from 'react-router-dom'
import PrevBrownIcon from '@/assets/icons/prev_brown.svg'

const CreatePostHeader = () =>{
    return (
        <div>
            <Link to="/" className ="mx-2 my-2 h-[3.125rem]">
                <img src={PrevBrownIcon}/>
            </Link>
        </div>
    )
}

export default CreatePostHeader

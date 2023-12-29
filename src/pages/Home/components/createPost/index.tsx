import { useState } from 'react';
import CreatePostHeader from './Header';

type BreadType = '조리빵'|'특수빵'|'식빵'|'과자빵'| null;

const CreatePost = () =>{

    const breadType = ['조리빵','특수빵','식빵','과자빵'];

    const [title,setTitle] = useState<string>('');
    const [detail,setDetail] = useState<string>('');
    // const [fileUrl,setFileUrl] = useState<string>(''); <-file로 대체 예정
    const [selectedBread,setSelectedBread] = useState<BreadType>(null);


    return (
        <div>
            <CreatePostHeader/>
            <div className ="w-fit mx-auto">
                <div className ="mb-[3rem]">               
                     <input 
                        placeholder='어떤 레시피인가요?'
                        className ="mb-2 mx-2 min-w-[19rem] outline-offset-0"
                        onChange={(e)=>setTitle(e.target.value)}/>
                    <hr/>
                </div>
                <div>
                    <input 
                        placeholder='빵 이미지를 첨부 해주세요.'
                        className ="mb-2 mx-2 min-w-[19rem] outline-offset-0"/>
                    <hr/>
                </div>
                <div>
                    <p className ="text-[0.625rem] mt-6 mb-1 text-[#959595]">어떤 종류의 빵인가요?* 1개 선택</p>
                    <div className ='flex gap-2'>
                        {breadType.map((item, index)=>(
                            <button 
                                className = {`w-16 py-1 font-bold rounded-full ${selectedBread === item ? 'bg-[#9F8170] text-white' : 'bg-[#F3F3F3] text-[#926B58]'}`}
                                key={index}
                                onClick ={()=>setSelectedBread(item as BreadType)}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            <input 
                placeholder="레시피를 알려주세요."
                className ="w-[20rem] min-h-[39rem] mt-6 border-2 border-[#959595]"
                onChange={(e)=>setDetail(e.target.value)}
                />
            </div>
        </div>
    )
}
export default CreatePost;
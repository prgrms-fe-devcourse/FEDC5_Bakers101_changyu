import { useState } from 'react';

import CreatePostHeader from './Header';

import { createPost } from '@/apis/postApis';
import { getChannelInform } from '@/apis/channelApis';
import { AdminLogin } from '@/apis/mockingApis';
import FileUploadIcon from '@/assets/icons/fileUpload.svg'
import handleImageFormData from '@/utils/handleImageFormData';

type CreatePostTypes = {
    setNowCreate : React.Dispatch<React.SetStateAction<boolean>>; 
  };

type BreadType = '조리빵'|'특수빵'|'식빵'|'과자빵'| null;

const CreatePost = ({setNowCreate} : CreatePostTypes) =>{

    const breadType = ['조리빵','특수빵','식빵','과자빵'];

    const [title,setTitle] = useState<string>('');
    const [detail,setDetail] = useState<string>('');
    const [file,setFile] = useState<File|null>(null);
    const [selectedBread,setSelectedBread] = useState<BreadType>(null);

    const onClickEnrollPost = async() => {
        if (selectedBread === null)
            return ;

        const token = await AdminLogin();
        const channelId = await getChannelInform(selectedBread);
        const formData = handleImageFormData({ imageFile: file as File, title : title, type :'Post',body: detail, channelId : channelId._id});
        await createPost(token,formData);
        setNowCreate(false);
    }

    const onClickUploadImage = () =>{
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/gif, image/jpeg,image/png,image/jpg';
        
        fileInput.onchange = (e: Event) => {
            if (!e.target) return ;
            const target = e.target as HTMLInputElement;
            if (!target.files || !target.files[0]) return ;

            setFile(target.files[0]);
        };
        fileInput.click();
    }

    return (
        <div className ="w-screen">
            <CreatePostHeader onClickCreate ={()=>setNowCreate(false)}/>
            <div className ="w-fit mx-auto">
                <div className ="mb-[2.7rem]">               
                     <input 
                        placeholder ='어떤 레시피인가요?'
                        className ="mb-2 mx-2 min-w-[19rem]"
                        onChange ={(e)=>setTitle(e.target.value)}/>
                    <hr/>
                </div>
                <div>
                    <div className ="flex mb-1">
                        <p className ="mt-2 mx-2 w-[16.8rem] text-[#959595] overflow-hidden text-ellipsis">
                            {
                                file ? file.name : '빵 이미지를 첨부 해주세요.'
                            }
                        </p>
                        <button 
                            className ="pb-2"
                            onClick ={onClickUploadImage}>
                            <img src ={FileUploadIcon}/>
                        </button>
                    </div>
                    <hr/>
                </div>
                <div>
                    <p className ="text-[0.625rem] mt-6 mb-1 text-[#959595]">어떤 종류의 빵인가요?* 1개 선택</p>
                    <div className ='flex gap-2'>
                        {breadType.map((item, index)=>(
                            <button 
                                className ={`w-16 py-1 font-bold rounded-full ${selectedBread === item ? 'bg-[#9F8170] text-white' : 'bg-[#F3F3F3] text-[#926B58]'}`}
                                key ={index}
                                onClick ={()=>setSelectedBread(item as BreadType)}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            <input 
                placeholder ="레시피를 알려주세요."
                className ="w-[20rem] min-h-[39rem] mt-6 border-1 border-[#959595] placeholder-start"
                onChange ={(e)=>setDetail(e.target.value)}
                />
            </div>
            <button 
                onClick ={onClickEnrollPost}
                className ="fixed w-fit left-1/2 transform -translate-x-1/2 bottom-4 text-[1.1rem] font-bold px-6 py-2 rounded-full drop-shadow-lg border-1 border-slate-100 ">등록하기</button>
        </div>
    )
}
export default CreatePost;
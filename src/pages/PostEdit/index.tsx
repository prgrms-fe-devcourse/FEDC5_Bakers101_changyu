import { useParams } from 'react-router-dom'

import { useState,useEffect } from 'react';
import { getPostDetail } from '@/apis/postApis';

const PostEdit = () =>{

    const [title,setTitle] = useState<string>('')
    const [details,setDetails] = useState<string>('')

    const params = useParams();
    const productId = params.id;

    useEffect(()=>{
        (async()=>{
            if (!productId) return;
            const details = await getPostDetail(productId);
            console.log(details);
            await setTitle(JSON.parse(details.title).title);
            await setDetails(JSON.parse(details.title).body);
        })();
    },[]);


    return (
    <div className ="w-fit mx-auto">
        <div>
            <div className = "w-[4rem] h-[4rem] overflow-hidden mx-auto rounded-full">
            </div>
            <input 
                className ="w-fit mx-auto  my-2 text-[1.4rem] border-1 border-black font-medium" 
                onChange={(e) => setTitle(e.target.value)}
                value ={title}/>
            
        </div>
            <div className ="w-4/5 mx-auto px-2">
                <input 
                    className ="min-h-[26rem] border-1 border-black" 
                    onChange={(e) => setDetails(e.target.value)}
                    value ={details}/>
            </div>
        </div>
    )
}

export default PostEdit;

import { PostType } from "@/context/PostContext"

type Props ={
    item:PostType,
    Onclick:()=>void
    }


export const FocoPost = ({item,Onclick}:Props)=>{
    return(
        <div className="fixed top-0 left-0 bg-black/90 w-full h-full flex justify-center items-center ">
            <div className=" w-4/12  bg-gray-800 rounded-md">
            <div className="h-20 text-white">{item.titulo.toLocaleUpperCase()}</div>
            <div className="break-words -mt-8 text-gray-100/80 italic">{item.body}</div>
            <p className="text-blue-500 mt-3">Data de criação - {item.data}</p>
            <button onClick={Onclick} className="text-green-500 mb-2 mt-2 border-b border-gray-800 hover:border-green-500 ">Voltar</button>
            </div>
        </div>
    )
}
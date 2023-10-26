import { PostContext } from "@/context/PostContext"
import { useContext, useState } from "react"

export const Header = ()=>{


    const PostCtx = useContext(PostContext)
    const[tituloInput, setTituloInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')

    const handleAddPost = ()=>{

        if(tituloInput && bodyInput){
            PostCtx?.addPost(tituloInput,bodyInput)
            setBodyInput("")
            setTituloInput("")
         }else{
            alert("Prencha todos os campos")
         }
       
    }

    return(

        <div>
             <p className="text-blue-500 text-right mr-9 text-sm "> Numero de POSTS: <span className="text-white font-semi-bold text-lg">{PostCtx?.post.length}</span> </p>
            
        <div className="flex flex-col items-center w-full mt-10 ">
              
            <input value={tituloInput} onChange={e=>setTituloInput(e.target.value)} required type="text" placeholder="Digite o titulo do POST" className="w-96 text-center text-white bg-gray-800 border-b border-gray-500 font-bold outline-none my-3 placeholder:text-center" />
            <textarea value={bodyInput} onChange={e=> setBodyInput(e.target.value)} required placeholder="Digite um POST" className="text-white text-center border border-gray-300 bg-gray-800 w-4/6 my-3 outline-none placeholder:text-center "></textarea>
            <button onClick={handleAddPost} className="bg-green-500 text-white  font-bold rounded-md mb-5 p-3 w-1/5">Adicionar</button>
        </div>

        </div>
    )
}
import { ReactNode, createContext, useState } from "react";

export type PostType = {
  id: number;
  titulo: string;
  body: string;
  data: string;
};

type PostContextType = {
  post: PostType[];
  addPost: (title: string, body: string) => void;
  remove:(id:number)=>void
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [post, setPost] = useState<PostType[]>([]);

  const addPost = (title: string, body: string) => {
    
    let d

    const data = new Date();
    let dia = data.getDay();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    if(dia < 10){
        d = `0${dia}`
    }else{
        d = dia
    }

    let dataAtual = `${d}/${mes}/${ano} - ${hora}:${minutos}`;
    setPost([
      ...post,
      {
        id: Math.floor(Math.random() * 100),
        titulo: title,
        body,
        data: dataAtual,
      },
    ]);
  };

  const remove = (id:number)=>{

    setPost(post.filter(item => item.id !== id))

  }

  return (
    <PostContext.Provider value={{ post, addPost,remove }}>
      {children}
    </PostContext.Provider>
  );
};

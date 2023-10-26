import { PostContext, PostType } from "@/context/PostContext";
import { useContext, useState } from "react";
import { FocoPost } from "./FocoPost";

export const ListPost = () => {
  const PostCtx = useContext(PostContext);
  const [focoPost, setFocoPost] = useState<PostType>({
    id: 0,
    titulo: "",
    body: "",
    data: "",
  });
  const [show, setShow] = useState(false);
  const getPost = () => {
    setShow(!show);
  };
  return (
    <div className=" w-8/12 mx-auto text-center flex justify-center flex-wrap  gap-16 wap ">
      {PostCtx?.post.map((item) => (
        <div key={item.id} className=" rounded-md  cursor-pointer ">
          <div onClick={() => setFocoPost(item)} className="text-white flex">
            <div onClick={getPost} className="text-blue-500 mr-2">
              Exibir post {PostCtx.post.indexOf(item) + 1}
            </div>
            {item.titulo.toLocaleUpperCase()}
            <svg
              onClick={() => PostCtx.remove(item.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5  ml-2 fill-red-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      ))}
      {show && <FocoPost item={focoPost} Onclick={getPost} />}
    </div>
  );
};

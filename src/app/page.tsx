"use client";

import { Header } from "@/components/Header";
import { ListPost } from "@/components/PostList";
import { PostProvider } from "@/context/PostContext";
import { useState } from "react";

export const Page = () => {
  return (
    <PostProvider>
      <div className="container mx-auto h-screen border border-x-gray-200 flex flex-col bg-gray-800  ">
        <h1 className="text-white text-center mt-4 text-3xl">MY POSTS</h1>
        <Header />
        <ListPost />
      </div>
    </PostProvider>
  );
};

export default Page;

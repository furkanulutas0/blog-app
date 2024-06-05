/* eslint-disable @typescript-eslint/no-explicit-any */
import PostCard from "../components/blog-items/PostCard";
import { useEffect, useState } from "react";
import MiniPostCard from "../components/blog-items/MiniPostCard";
import { Carousel } from "flowbite-react";
import { Author } from "../constants/types";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/post/get/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "1234567890",
          },
        });
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="mx-4 my-5 flex flex-col lg:mx-32">
          <div className="aspect-video max-w-full rounded-xl bg-[#D9D9D9] lg:max-w-5xl">
            <Carousel>
              {posts.map(
                (
                  post: {
                    id: string;
                    image: string;
                  },
                  index,
                ) => (
                  <img
                    key={index}
                    src={post.image}
                    alt="..."
                    onClick={() => {
                      window.location.href = "/blog/details/" + post.id;
                    }}
                  />
                ),
              )}
            </Carousel>
          </div>
          <div className="mb-5 mt-3 h-10 w-full max-w-full rounded-xl bg-[#02A28F] lg:max-w-5xl"></div>
          <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-2 ">
            {posts.map(
              (
                post: {
                  id: string;
                  author: Author;
                  body: string;
                  date: string;
                  image: string;
                  title: string;
                  short: string;
                },
                index,
              ) => (
                <PostCard
                  key={index}
                  blogId={post.id}
                  author={post.author}
                  body={post.body}
                  image={post.image}
                  short={post.short}
                  date={"2021-10-10"}
                  title={post.title}
                />
              ),
            )}
          </div>
        </div>
        <div className="mx-4 my-5 w-[95%] rounded-xl lg:ml-0 lg:mr-12 lg:w-3/4">
          <div className="mb-5 max-w-full rounded-xl bg-[#02A28F] py-6 lg:max-w-5xl">
            <p className="text-center text-xl font-bold text-white">
              Son Eklenen Yayınlar
            </p>
          </div>
          <div className="flex max-h-[35%] flex-col gap-2 overflow-auto">
            {posts.map(
              (
                post: {
                  id: string;
                  author: Author;
                  date: string;
                  title: string;
                  short: string;
                  image: string;
                },
                index,
              ) => (
                <MiniPostCard
                  key={index}
                  blogId={post.id}
                  body={undefined}
                  author={post.author}
                  image={post.image}
                  short={post.short}
                  date={"2021-10-10"}
                  title={post.title}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}

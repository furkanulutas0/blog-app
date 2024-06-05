import { useEffect, useState } from "react";
import PostCard from "../components/blog-items/PostCard";
import { Author } from "../constants/types";

export default function Blog() {
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
    <div className="m-12 flex flex-wrap justify-center gap-5">
      {posts.map(
        (
          post: {
            id: string;
            author: Author;
            date: string;
            short: string;
            title: string;
            body: string;
          },
          index,
        ) => (
          <PostCard
            key={index}
            blogId={post.id}
            author={post.author}
            body={post.body}
            short={post.short}
            date={"2021-10-10"}
            title={post.title}
          />
        ),
      )}
    </div>
  );
}

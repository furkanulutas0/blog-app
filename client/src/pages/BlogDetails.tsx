/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { useLocation } from "react-router-dom";
import { Author, PostProps } from "../constants/types";
import Comment from "../components/blog-items/Comment";
import { BiCommentAdd } from "react-icons/bi";
import { useAppSelector } from "../hooks/redux_hooks";

export default function BlogDetails() {
  const { currentUser } = useAppSelector((state) => state.user);
  const location = useLocation();
  const [typing, setTyping] = useState(false);
  const [commentData, setCommentData] = useState("" as string);
  const [post, setPost] = useState({} as PostProps);
  const [author, setAuthor] = useState({} as Author);
  const [comments, setComments] = useState(
    [] as Array<{ id: string; author: Author; comment: string }>,
  );
  const [newCommentAdded, setNewCommentAdded] = useState(false);

  const handleChange = (e: any) => {
    setCommentData(e.target.value);
  };

  async function handleAddComment(e: any) {
    e.preventDefault();
    try {
      const res = await fetch("/api/post/comment/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "1234567890",
        },
        body: JSON.stringify({
          comment: commentData,
          postId: location.pathname.split("/")[3],
          authorId: (currentUser as { id: string })?.id,
        }),
      });
      const data = await res.json();
      console.log({
        status: res.status,
        message: "Comment added successfully!",
        data: data,
      });
      setNewCommentAdded(!newCommentAdded);
      setCommentData(""); // Clear the input after submitting
      setTyping(false); // Hide the input field after submitting
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "/api/post/get/" + location.pathname.split("/")[3],
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "1234567890",
            },
          },
        );
        const data = await res.json();
        setPost(data);
        setAuthor(data.author);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, [location.pathname]);

  useEffect(() => {
    async function fetchComments() {
      try {
        setComments([]);
        const res = await fetch(
          "/api/post/get/" + location.pathname.split("/")[3] + "/comments",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "1234567890",
            },
          },
        );
        const data = await res.json();
        setComments(data.data);
      } catch (error) {
        console.log(error);
        setComments([]);
      }
    }
    fetchComments();
  }, [location.pathname, newCommentAdded]); // Remove comments from dependencies

  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={post.image}
        bgImageAlt="the dog"
        strength={-400}
      >
        <div style={{ width: "1000px", aspectRatio: 16 / 9 }} />
      </Parallax>
      <div className="flex flex-col">
        <p className="my-5 rounded-xl bg-[#02A28F] p-3 text-3xl font-bold text-white">
          {post.title}
        </p>
        <div className="flex justify-center">
          <div className="h-0.5 w-full bg-gray-500"></div>
        </div>
        <p className="m-5 max-w-7xl text-wrap rounded-xl bg-white bg-opacity-50 p-5">
          {post.body}
        </p>

        <div className="h-0.5 w-full bg-[#02A28F] "></div>

        <div className="p-2">
          <p className="flex gap-10 text-gray-400">
            <span>
              Author:<span className="font-semibold"> {author.name}</span>
            </span>{" "}
            <span>
              Publishment Date:{" "}
              <span className="font-semibold">01/06/2024</span>
            </span>
          </p>
        </div>
        <div className="h-0.5 w-full bg-[#02A28F]"></div>
        <div className="flex-col">
          <div className="m-5 flex justify-between pr-2 text-2xl font-semibold text-slate-600">
            <p>Yorumlar</p>
            <button
              onClick={() => {
                setTyping(!typing);
              }}
            >
              <BiCommentAdd />
            </button>
          </div>
          {typing && (
            <div className="m-5">
              <form className="flex flex-col gap-5">
                <textarea
                  id="comment"
                  onChange={handleChange}
                  value={commentData} // Bind the state to the textarea value
                  placeholder="Yorumunuzu yazınız..."
                  className="min-h-24 rounded-lg border-none border-green-400 bg-slate-500 bg-opacity-15 p-2 transition-all ease-in-out focus:border-none focus:ring-2 focus:ring-[#02A28F] focus:ring-opacity-50"
                />
                <button
                  onClick={handleAddComment}
                  className="max-w-36 rounded-lg bg-[#02A28F] p-2"
                >
                  <p className="text-white">Gönder</p>
                </button>
              </form>
            </div>
          )}
          {comments.map(
            (
              comment: {
                id: string;
                author: Author;
                comment: string;
              },
              index,
            ) => (
              <Comment
                key={index}
                commentId={comment.id}
                comment={comment.comment}
                author={comment.author}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

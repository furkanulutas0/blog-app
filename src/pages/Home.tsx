import { animated, useSpring } from "@react-spring/web";
import PostCard from "../components/blog-items/PostCard";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function Home() {
  const springs = useSpring({
    from: { opacity: 0, transform: "translateY(-100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });
  return (
    <>
      <animated.div className="flex justify-center" style={springs}>
        <div className=" flex gap-2 px-32 py-16 text-6xl font-bold text-slate-700 dark:text-white ">
          Welcome to the{" "}
          <div className="bg-gradient-to-r from-indigo-700 to-blue-500 px-5 text-center">
            <span className="text-white dark:text-black"> Our Blog</span>
          </div>
        </div>
      </animated.div>
      <div className="m-12 flex flex-wrap justify-center gap-5">
        <PostCard blogId="123123" />
        <PostCard />
        <PostCard />
      </div>
      <div className="flex justify-center">
        <div className="h-0.5 w-1/2 bg-gray-300 dark:bg-gray-300"></div>
      </div>
      F
      <div className="mt-5 flex justify-center">
        <Link to={"/blog"}>
          <Button gradientDuoTone="greenToBlue">Discover More</Button>
        </Link>
      </div>
    </>
  );
}

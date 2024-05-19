import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";

export default function PostCard({ blogId }: { blogId: string }) {
  const springs = useSpring({
    from: { opacity: 0, transform: "translateY(-100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });
  return (
    <Link to={"blog/details/" + blogId}>
      <animated.div
        style={springs}
        className="w-fit rounded-lg bg-gradient-to-bl from-[#dee2e6] to-[#adb5bd] dark:bg-gradient-to-bl dark:from-[#202c39] dark:to-[#283845] "
      >
        <div className="flex flex-col p-4">
          <div className="h-48 w-64 rounded-lg bg-gray-200"></div>
          <div className="mt-4 flex flex-col py-8">
            <div className=" max-w-64 text-2xl font-semibold text-slate-700 dark:text-[#e0e1dd]">
              Title TitleTitle TitleTitle Title
            </div>
            <div className="text-sm text-[#1b263b] dark:text-[#778da9]">
              Author
            </div>
            <div className="text-sm text-[#1b3b20] dark:text-[#778da9]">
              Date
            </div>
            <div className="text-sm text-[#1b263b] dark:text-[#778da9]">
              Category
            </div>
          </div>
        </div>
      </animated.div>
    </Link>
  );
}

import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import { PostProps } from "../../constants/types";

export default function MiniPostCard({
  blogId,
  title,
  short,
  image,
}: PostProps) {
  const springs = useSpring({
    from: { opacity: 0, transform: "translateY(-100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });
  return (
    <animated.div style={springs}>
      <Link
        to={"/blog/details/" + blogId}
        className="flex max-h-32 min-h-32 gap-4 rounded-lg bg-white p-2"
      >
        <img src={image} className="w-1/3  rounded-lg bg-slate-400"></img>
        <div className="w-2/3">
          <p className="text-lg font-semibold">{title}</p>
          <p className="max-h-10 truncate text-wrap text-sm font-light">
            {short}
          </p>
        </div>
      </Link>
    </animated.div>
  );
}

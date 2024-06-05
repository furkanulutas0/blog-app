import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import { PostProps } from "../../constants/types";

export default function PostCard({
  blogId,
  title,
  short,
  image,
  author,
}: PostProps) {
  const springs = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 200,
  });
  return (
    <animated.div style={springs}>
      <Link
        to={"/blog/details/" + blogId}
        className="flex max-w-xs flex-col rounded-lg bg-white shadow-[0px_10px_20px_#0000001a] md:max-w-3xl lg:max-w-5xl"
      >
        <img
          src={image}
          alt=""
          className="max-h-48 w-full rounded-t-lg object-cover"
        />
        <div className="p-5">
          <p className="text-xl font-bold">{title}</p>
          <p>
            <span className="font-semibold text-slate-600">by </span>
            <span className="font-light">{author.name}</span>
          </p>
          <p className="max-h-48 min-h-48 truncate text-wrap py-4">{short}</p>
          <p>22 Ağustos 2024</p>
        </div>
      </Link>
    </animated.div>
  );
}

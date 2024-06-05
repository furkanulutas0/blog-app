import { CommentProps } from "../../constants/types";

export default function Comment({ comment, author }: CommentProps) {
  return (
    <>
      <div className="m-2 max-w-7xl rounded-xl bg-white bg-opacity-25">
        <div className="p-5">
          <p className=" font-light">
            Comitted by{" "}
            <span className="text-lg font-semibold">{author.name}</span>
          </p>
        </div>
        <div className="px-5 pb-5">
          <p className="text-slate-500">{comment}</p>
        </div>
      </div>
    </>
  );
}

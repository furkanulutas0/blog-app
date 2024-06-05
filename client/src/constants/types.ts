export interface Author {
  authorId: string;
  name: string;
}

export interface PostProps {
  blogId: string;
  title: string;
  body: string | undefined;
  short: string;
  date: string;
  image: string;
  author: Author;
}

export interface CommentProps {
  commentId: string;
  comment: string;
  author: Author;
}

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

interface Props {
  postId: number;
}

export default async function CommentsList({ postId }: Props) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    { cache: "no-store" }
  );
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const comments = (await data.json()) as Comment[];

  return (
    <div>
      {comments.map((comment: Comment) => (
        <div key={comment.id} className="rounded shadow-lg m-4 bg-gray-800">
          <div className="px-6 py-4">
            <div className="mb-2 flex items-baseline justify-between">
              <p className="font-bold text-xl">{comment.name}</p>
            </div>
            <p className="text-gray-200 text-base">{comment.body}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              comment {comment.id}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              by: {comment.email}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

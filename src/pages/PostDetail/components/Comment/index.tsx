interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsListProps {
  comments: Comment[];
}

const Comment = ({ comments }: CommentsListProps) => {
  return (
    <div className="space-y-5">
      {comments.map((c) => (
        <div key={c.id} className="flex items-start space-x-3">
          {/* Avatar (auto từ tên) */}
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            {c.name.charAt(0).toUpperCase()}
          </div>

          {/* Bubble comment */}
          <div className="bg-gray-100 rounded-2xl px-4 py-3 shadow-sm w-full">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{c.name}</h3>
            </div>

            <p className="text-sm text-gray-500 mb-2">{c.email}</p>

            <p className="text-gray-800 leading-relaxed">
              {c.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;

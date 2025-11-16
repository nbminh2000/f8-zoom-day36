import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../../components/Loading";
import Comment from "./components/Comment";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostDetail = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          navigate("/posts", { replace: true });
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPost(data);
          setIsLoading(false);
        }
      });
  }, [id, navigate]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setComments(data);
      });
  }, [comments, id]);
  if (isLoading) return <Loading />;
  return (
    <>
      <div
        className="
        my-5
        bg-white 
        rounded-2xl 
        shadow-lg 
        p-8 
        border border-gray-100 
        w-full 
        animate-fadeIn
      "
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight text-center">
          {post?.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {post?.body}
        </p>
      </div>
      <Comment comments={comments} />
    </>
  );
};

export default PostDetail;

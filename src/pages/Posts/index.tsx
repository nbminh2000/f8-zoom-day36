import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import { useNavigate, useSearchParams } from "react-router";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const limit = 20;

const Posts = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(() =>
    parseInt(searchParams.get("page") ?? "1", 10)
  );
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setSearchParams({ page: currentPage.toString() });
  }, [currentPage, setSearchParams]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`
    )
      .then((res) => {
        const totalCount = res.headers.get("X-Total-Count");
        const total = totalCount ? Math.ceil(Number(totalCount) / limit) : 1;
        setTotalPages(total); // <- dùng state
        return res.json();
      })
      .then((posts: Post[]) => {
        setTimeout(() => {
          // fake loading 2s
          setPosts(posts);
          setIsLoading(false);
        }, 50);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [currentPage]);

  const handlePost = (id: number) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
      <ul className="space-y-3 mt-2">
        {isLoading ? (
          <Loading />
        ) : (
          posts.map((post) => (
            <li
              key={post.id}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              onClick={()=> {handlePost(post.id)}}
            >
              <span className="font-medium text-gray-800">
                {post.id}. {post.title}
              </span>
            </li>
          ))
        )}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

export default Posts;

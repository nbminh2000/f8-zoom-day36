const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-lg">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-semibold tracking-wide">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600 text-center max-w-md">
        Trang bạn đang tìm không tồn tại hoặc đã bị di chuyển.
      </p>
    </div>
    );
}

export default NotFound;

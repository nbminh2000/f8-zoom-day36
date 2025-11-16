const Footer = () => {
    return(
        <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-3">

        <p className="text-lg font-semibold tracking-wide">
          © {new Date().getFullYear()} Nguyễn Bình Minh
        </p>

        <p className="text-sm text-gray-400">
          Built with ❤️ using React & TailwindCSS
        </p>

        <div className="flex space-x-5 mt-2">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>

    )
}
export default Footer;
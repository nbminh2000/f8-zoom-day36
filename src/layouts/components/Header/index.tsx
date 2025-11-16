import { NavLink } from "react-router";

const Header = () => {
  const baseClass =
    "px-4 py-2 rounded-xl transition-all duration-200 font-medium text-white";
  const activeClass = "text-white bg-blue-600";

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Posts", to: "/posts" },
    { name: "Contact", to: "/contact" },
    { name: "Privacy", to: "/privacy" },
  ];

  return (
    <header className="w-full bg-gray-900 shadow-md">
      <nav className="flex items-center space-x-4 p-4 justify-start">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : "hover:bg-blue-400"}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;

import { NavLink } from "react-router-dom";

export const Header = () => {
  const navigation = [
    { path: "/", name: "List Book" },
    { path: "/add", name: "Add Book" },
  ];

  return (
    <header>
      <h1>Book Management</h1>
      <nav>
        {navigation.map((nav) => (
          <NavLink key={nav.name} to={nav.path}>
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

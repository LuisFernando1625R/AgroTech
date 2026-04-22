import { Link } from "react-router-dom";

export default function NavItem({ link, children }) {
  if (typeof link === "string" && link.startsWith("#")) {
    return (
      <li className="nav-item my-2">
        <a className="btn-custom_2 nav-link text-light p-2" href={link}>
          {children}
        </a>
      </li>
    );
  }

  return (
    <li className="nav-item my-2">
      <Link className="btn-custom_2 nav-link text-light p-2" to={link}>
        {children}
      </Link>
    </li>
  );
}

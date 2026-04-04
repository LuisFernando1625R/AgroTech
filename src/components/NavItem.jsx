import { Link } from "react-router-dom";

function isExternalLink(url) {
  return /^https?:\/\//.test(url) || /^\/\//.test(url);
}

export default function NavItem({ link, target, children }) {
  const isHashLink = typeof link === "string" && link.startsWith("#");
  const isExternal = typeof link === "string" && isExternalLink(link);

  if (isExternal || isHashLink) {
    return (
      <li className="nav-item my-2">
        <a
          className="btn-custom_2 nav-link text-light p-2"
          href={link}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
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

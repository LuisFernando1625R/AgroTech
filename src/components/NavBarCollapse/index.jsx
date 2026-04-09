export default function NavBarCollapse({ children, id = "homeNav" }) {
  return (
    <div className="collapse navbar-collapse" id={id}>
      <ul className="navbar-nav ms-auto flex-row justify-content-end gap-3">{children}</ul>
    </div>
  );
}

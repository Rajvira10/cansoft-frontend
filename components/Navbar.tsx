import { getMenuItems } from "@/libs/graphqlQueries";

const Navbar = async () => {
  const menuItems = await getMenuItems();

  const renderMenu = (items: any[]) => {
    return items.map((menuItem: any) => {
      if (menuItem.childItems?.nodes.length > 0) {
        return (
          <li key={menuItem.id} className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href={menuItem.url}
              id={`dropdown-${menuItem.id}`}
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {menuItem.label}
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby={`dropdown-${menuItem.id}`}
            >
              {menuItem.childItems.nodes.map((childItem: any) => {
                return (
                  <li key={childItem.id}>
                    <a className="dropdown-item" href={childItem.url}>
                      {childItem.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      } else if (menuItem.parentId) {
        return null;
      } else {
        return (
          <li key={menuItem.id} className="nav-item">
            <a className="nav-link" href={menuItem.url}>
              {menuItem.label}
            </a>
          </li>
        );
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {renderMenu(menuItems)}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

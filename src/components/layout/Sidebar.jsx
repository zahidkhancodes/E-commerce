import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiShoppingBag,
  FiGrid,
  FiShoppingCart,
  FiFileText,
  FiUser,
  FiSettings,
} from "react-icons/fi";

function Sidebar(ele) {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon">🛍</span>
        <span>ShopHub</span>
      </div>

      <div className="nav-links">
        <NavLink to="/" className="nav-item">
          <FiHome /> <span>Home</span>
        </NavLink>

        <NavLink to="/products" className="nav-item">
          <FiShoppingBag /> <span>Products</span>
        </NavLink>

        {/* <NavLink to="/categories" className="nav-item">
          <FiGrid /> <span>Categories</span>
        </NavLink> */}

        <NavLink to="/cart" className="nav-item cart-link">
          <FiShoppingCart /> <span>Cart</span>
          <span className="cart-badge">{ele.cartValue}</span>
        </NavLink>

        {/* <NavLink to="/orders" className="nav-item">
          <FiFileText /> <span>Orders</span>
        </NavLink> */}

        <NavLink to="/profile" className="nav-item">
          <FiUser /> <span>Profile</span>
        </NavLink>

        <NavLink to="/settings" className="nav-item">
          <FiSettings /> <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
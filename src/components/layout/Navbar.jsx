function Navbar() {
  return (
    <div className="navbar">
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
      />

      <div className="profile">
        <span>🔔</span>
        <span>John Doe</span>
      </div>
    </div>
  );
}


export default Navbar;
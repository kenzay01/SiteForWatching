import "./styles/HomeHeader.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="main-header">
        {/* <h1>Menu</h1> */}
        <div className="header-icons">
          <h1 className="search-container">search</h1>
          <h1 className="profile-icon">profile</h1>
        </div>
      </div>
    </div>
  );
}

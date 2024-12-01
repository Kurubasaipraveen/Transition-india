import React from "react";
import "../styles/navbar.css"; // Ensure the CSS file exists and is properly linked

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Breadcrumb */}
      <div className="breadcrumb">Chat / Feed Chat</div>

      {/* Right-side elements */}
      <div className="navbar-right">
        {/* Home Icon */}
        <i className="bi bi-house"></i>

        {/* Role Badges */}
        <div className="role-badge process-owner">Process Owner HOD</div>
        <div className="role-badge admin">Admin</div>

        {/* User Info */}
        <div className="user-info">
          <span className="user-name">Palak Bansal</span>
          <img
            src="https://s3-alpha-sig.figma.com/img/28d1/418c/98ac8b5440b32e95a31a25f0b7d349ac?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph8qsfchd8kUORZ2Ynl5BwkJOLb8N4lat4q5~31RomchuWqE3oPiZmszcAjnytEoY45ukX5cVcpznQGaeqW-MrBB~vy-tsqpfxX3Xy-T6wk3aW5hm8cG5kIPUtdQ9MMcCacIYQwxZS3HF4mLeZ59rTv4Dm3Ej5nIe7PNx2tZexgTomkHvmX3YLJFGzcv5hxdqPKDA2W8kOt3So9YjFJ~QnWHl~IVeY39xhFn7~sCSUAwXtQjh1ApJiCjPj8ai9-wuNgl6HwYoUph9ObMuOlRhZ9rcT6Bt8OjIKX8QMzHnVYAt8~6T0~PyvYSLEkcsazbHhXTr0kA56QpalFAw9FxeQ__" // Replace with actual image URL
            alt="User Avatar"
            className="user-avatar"
          />
          {/* Settings Icon */}
          <i className="bi bi-gear"></i>
        </div>

        {/* Logout Button */}
        <button className="logout-button">
          <i className="bi bi-box-arrow-right"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

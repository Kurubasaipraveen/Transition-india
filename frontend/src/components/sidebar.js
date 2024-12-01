import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img
          src="https://s3-alpha-sig.figma.com/img/2256/f75b/28fdeb1cca31293321203f289a781c25?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JcHHj9Xx-7qoA9QPQFRIbI67AjYdCBuA6t9hwSePizTdQRTC-Tuz-6V58rUCEHtza-cS7Tmf2RA2l~lEiWmrBkhEfd7IGqPb1S30ZvUOqtBcV1IeXxahNykviJGuVs4EOhxPUgSXml15Eu8QZwtvzPIr7QQriq0ZnsYLtgL3a60XFZE8ojxLBLPvaivwBSKVwlsbs59Ka-oJ032~aa49TeLuNrzqTDObKaMdoU5DxnzQTZifbCncsDFbDV-TWH~DzVB6lSmOHALk9UBvrLFCUntc-uCP~zpf~uIPdlplhOoJ0O498OYf-NTUo4pti2B98uFTmNZZnby9do6qbKqwTg__" // Replace with your logo URL
          alt="Risk Hawk Logo"
          className="logo"
        />
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item"><i class="bi bi-file-text-fill"></i>Internal Audit</li>
        <li className="menu-item "><i class="bi bi-file-text-fill"></i>UAT Testing</li>
        <li className="menu-item"><i class="bi bi-link"></i>Intract</li>
        <li className="menu-item active"><i class="bi bi-people"></i>Queue</li>
        <li className="menu-item"><i class="bi bi-diagram-3"></i>Workflow</li>
        <li className="menu-item"><i class="bi bi-person"></i>Admin</li>
        <li className="menu-item"><i class="bi bi-box"></i>Asset</li>
        <li className="menu-item"><i class="bi bi-people"></i>Parent</li>
        <li className="menu-item"><i class="bi bi-1-circle"></i>Option One</li>
        <li className="menu-item"><i class="bi bi-2-circle"></i>Option Two</li>
        <li className="menu-item"><i class="bi bi-file-text-fill"></i>All Accessories</li>
        <li className="menu-item"><i class="bi bi-stars"></i>Decorating</li>
        <li className="menu-item"><i class="bi bi-gift"></i>Presenting</li>
      </ul>
    </div>
  );
};

export default Sidebar;

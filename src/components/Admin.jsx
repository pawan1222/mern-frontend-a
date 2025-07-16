// import React from "react";
// import { Outlet, Link } from "react-router-dom";
// export default function Admin() {
//   return (
//     <div>
//       <Link to="/admin">Users</Link>-
//       <Link to="/admin/products">Products</Link>-
//       <Link to="/admin/orders">Orders</Link>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Admin.css";

export default function Admin() {
  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <Link to="/admin">Users</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

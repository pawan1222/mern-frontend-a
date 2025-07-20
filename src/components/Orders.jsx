import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Orders.css";

export default function Orders() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  const fetchAllOrders = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/orders?status=${status}&page=${page}`);
      setOrders(res.data.orders);
      setTotalPages(res.data.total);
    } catch (err) {
      setError("Failed to fetch orders.");
      console.error(err);
    }
  };

  const updateOrderStatus = async (id, newStatus) => {
    try {
      await axios.put(`${API_URL}/api/orders/${id}`, { status: newStatus });
      fetchAllOrders(); // Refresh after update
    } catch (err) {
      alert("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [page, status]);

  return (
    <div className="orders-admin-container">
      <h2>All Orders (Admin View)</h2>

      <div className="orders-filter">
        <input
          type="text"
          placeholder="Search by status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      {error && <p>{error}</p>}

      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Email</th>
              <th>Order Value</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>₹{order.orderValue}</td>
                <td>{order.status}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="orders-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

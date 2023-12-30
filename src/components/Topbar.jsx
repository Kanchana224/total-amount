import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Cartcontext";

function Topbar() {
  const { totalQuantity } = useCart();
  return (
    <>
    
      <header>
        <div>
          <h1>
            <Link to="/" className="logo">
              Mobile Shopping
            </Link>
          </h1>
        </div>
        <div className="header-links">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/cart" className="cart">
                <i className="fas fa-shopping-cart" />
              </Link>
              {totalQuantity > 0 && (
                <span
                  className="badge bg-primary"
                  style={{ marginRight: 20, padding: 10, width: 30 }}
                >
                  <i className="bi bi-cart-fill"></i> {totalQuantity}
                </span>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Topbar;

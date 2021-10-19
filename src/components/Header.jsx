import React, { useContext } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "contexts/cart";
import { CommonDispatchContext, setSearchKeyword } from "contexts/common";
import { AuthStateContext, AuthDispatchContext, signOut } from "contexts/auth";
import CartPreview from "components/CartPreview";

const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const { user, isLoggedIn } = useContext(AuthStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);
    const history = useHistory();
    const location = useLocation();

  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  const handleLoginAsDiffUser = () => {
    signOut(authDispatch);
    history.push("/auth");
  };
  const authDispatch = useContext(AuthDispatchContext);
  return (
    <header>
      <div className="container">
        {/* <div className="brand">
          <Link to="/">
            <img
              className="logo"
              src=""
              alt="RKP Brand Logo"
            />
          </Link>
        </div> */}

        <div className="search">
          {/* <a
            className="mobile-search"
            href="#"
            // onClick={this.handleMobileSearch.bind(this)}
          >
            <img
              src=""
              alt="search"
            />
          </a> */}
          {/* <form action="#" method="get" className="search-form">
            <a
              className="back-button"
              href="#"
              // onClick={this.handleSearchNav.bind(this)}
            >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                alt="back"
              />
            </a>
            <input
              type="search"
              placeholder="Search for Vegetables and Fruits"
              className="search-keyword"
              onChange={handleSearchInput}
            />
            <button
              className="search-button"
              type="submit"
              // onClick={this.handleSubmit.bind(this)}
            />
          </form> */}
          <div className="auth-message">
        {isLoggedIn ? (
          <>
          <span>
              Logged in as <span>{user.username}</span>
              </span>
            <span>&nbsp;
            <button onClick={() => handleLoginAsDiffUser()}>
              Logout
            </button></span>
          </>
        ) : (
          null
        )}
      </div>
        </div>

        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{cartQuantity}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{cartTotal}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className="cart-icon" href="#" onClick={handleCartButton}>
            <img
              className={props.cartBounce ? "tada" : " "}
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              alt="Cart"
            />
            {cartQuantity ? (
              <span className="cart-count">{cartQuantity}</span>
            ) : (
              ""
            )}
          </a>
          <CartPreview />
        </div>
      </div>
    </header>
  );
};

export default Header;

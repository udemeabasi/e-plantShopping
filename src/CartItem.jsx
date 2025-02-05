import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.cost;
    }, 0);
  };

  const handleContinueShopping = () => {
    // Logic to navigate back to the plant listing page
    // If using React Router, you might use history.push or navigate
    history.push('/plant-listing'); // Example using React Router
  };

  // Calculate the total for all items in the cart
  const calculateTotalForAllItems = (cartItems) => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.cost;
    }, 0);
  };

  // Handling Check out
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };


  const handleIncrement = (itemName) => {
    dispatch(updateQuantity({ name: itemName, quantityChange: 1 }));
  };

  const handleDecrement = (itemName) => {
    const item = cartItems.find(item => item.name === itemName);
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: itemName, quantityChange: -1 }));
    } else {
      dispatch(removeItem(itemName));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.quantity * item.cost;
  };
  
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



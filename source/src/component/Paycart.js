import React from "react";
import { useNavigate } from "react-router-dom";

function PayCart({ carts, tongtien }) {
  const navigate = useNavigate();

  const handleBankTransfer = () => {
    // Implement bank transfer payment logic here
    alert("Please follow the instructions on the screen to complete your bank transfer payment.");
  };

  const handleQRPayment = () => {
    // Implement QR code payment logic here
    alert("Please scan the QR code on the screen to complete your payment.");
  };

  return (
    <div className="pay-cart">
      <h2>Payment</h2>
      <div className="payment-options">
        <button onClick={handleBankTransfer}>Chuyển khoản ngân hàng</button>
        <button onClick={handleQRPayment}>Thanh toán bằng QR Code</button>
      </div>
      <button onClick={() => navigate("/")}>Cancel</button>
      
    </div>
  );
}

export default PayCart;

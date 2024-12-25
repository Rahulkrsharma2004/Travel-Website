import React, { useState } from "react";

const PaymentModal = ({ trip, onClose, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{4}$/;
    const cvvPattern = /^\d{3}$/;

    if (!cardNumber) newErrors.cardNumber = "Card Number is required.";
    else if (!cardNumberPattern.test(cardNumber))
      newErrors.cardNumber = "Invalid Card Number.";

    if (!expiryDate) newErrors.expiryDate = "Expiry Date is required.";
    else if (!expiryDatePattern.test(expiryDate))
      newErrors.expiryDate = "Invalid Expiry Date.";

    if (!cvv) newErrors.cvv = "CVV is required.";
    else if (!cvvPattern.test(cvv))
      newErrors.cvv = "Invalid CVV.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onPaymentSuccess(trip._id);
    }, 2000);
  };

  return (
    <div className="fixed px-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
        </div>
        <div className="mb-4 flex justify-between">
          <div className="w-1/2 pr-2">
            <label className="block text-sm font-medium mb-1">Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="MM/YYYY"
            />
            {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-sm font-medium mb-1">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="text-white px-4 py-2 bg-red-500 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="px-4 py-2 bg-green-500 text-white rounded transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

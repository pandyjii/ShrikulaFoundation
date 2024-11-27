import React, { useState } from "react";

export function ShrikulaDonation() {
  const [amount, setAmount] = useState(0); // State to manage donation amount

  const handleDonation = async () => {
    try {
      const response = await fetch("http://localhost:8080/srikula/createpayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }), // Pass dynamic amount
      });

      const order = await response.json();

      if (!order.order_id) {
        throw new Error("Failed to create Razorpay order");
      }

      const options = {
        key: "rzp_test_UJ7J0uLBUnR6nq", // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: "INR",
        name: "Srikula Foundation",
        description: "Donation",
        order_id: order.order_id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Signature: ${response.razorpay_signature}`);
        },
        prefill: {
          name: "John Doe", // Replace with user's name
          email: "john.doe@example.com", // Replace with user's email
          contact: "9999999999", // Replace with user's phone number
        },
        notes: {
          address: "Donation for Srikula Foundation",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
            rzp.open();
    } catch (error) {
      console.error("Error during donation:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 w-96 text-center">
        {/* Logo */}
        <div className="w-12 h-12 bg-blue-500 text-white rounded-full mx-auto flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">S</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium text-gray-600">Paying</h3>
        <h2 className="text-xl font-bold text-gray-800 mt-1">SRIKULA FOUNDATION</h2>
        <p className="text-sm text-blue-500 mt-2">
          razorpay.me/@srikulafoundation
        </p>

        {/* Donation Amount */}
        <div className="flex items-center justify-center mt-6">
          <span className="text-3xl text-gray-800">₹</span>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="text-3xl border-b border-gray-300 outline-none w-20 text-center"
            placeholder="0"
          />
        </div>

        {/* Note */}
        <textarea
          placeholder="Add a note"
          className="w-full border rounded-md mt-4 p-2 text-sm text-gray-700 focus:outline-blue-500 resize-none"
        ></textarea>

        {/* Donate Button */}
        <button
          onClick={handleDonation}
          className="w-full bg-blue-500 text-white font-medium rounded-md py-2 mt-4 hover:bg-blue-600 transition"
        >
          Pay ₹{amount || 0}
        </button>

        {/* Footer */}
        <div className="mt-6 text-xs text-gray-500">
          <p>Want to accept online payments for your business?</p>
          <p>
            Visit{" "}
            <a
              href="https://razorpay.com"
              className="text-blue-500 hover:underline"
            >
              razorpay.com
            </a>{" "}
            to get started!
          </p>
        </div>
      </div>
    </div>
  );
}


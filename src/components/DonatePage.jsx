import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ShrikulaDonation() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState(""); // State for the note input
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById("razorpay-script")) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject(false);
      document.body.appendChild(script);
    });
  };

  const handleDonation = async () => {
    if (Number(amount) <= 0 || isNaN(Number(amount))) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Please refresh the page and try again.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay is not available. Please refresh the page and try again.");
      return;
    }

    try {
      const response = await fetch("https://api-dbaxa3zxka-uc.a.run.app/srikula/createpayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Number(amount), note }),
      });

      const order = await response.json();

      if (!order.order_id) {
        throw new Error("Failed to create Razorpay order");
      }

      const options = {
        key: "rzp_live_VUs6MEIFtSvIEc",
        amount: order.amount,
        currency: "INR",
        name: "Srikula Foundation",
        description: "Donation",
        order_id: order.order_id,
        handler: function (response) {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            navigate("/");
          }, 3000);
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
      <div className="bg-white rounded-lg p-6 w-96 text-center">
        <div className="w-12 h-12 bg-blue-500 text-white rounded-full mx-auto flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">S</span>
        </div>

        <h3 className="text-lg font-medium text-gray-600">Paying</h3>
        <h2 className="text-xl font-bold text-gray-800 mt-1">SRIKULA FOUNDATION</h2>
        <p className="text-sm text-blue-500 mt-2">razorpay.me/@srikulafoundation</p>

        <div className="flex items-center justify-center mt-6">
          <span className="text-3xl text-gray-800">₹</span>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
            className="text-3xl outline-none w-20 text-center border-b-2 border-gray-300 focus:border-blue-500"
            placeholder="0"
          />
        </div>

        <input
          type="text"
          placeholder="Add a note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border bg-slate-100 text-black text-center mt-5 mb-5 py-1 rounded"
        />

        <button
          onClick={handleDonation}
          className="w-full bg-blue-500 text-white font-medium rounded-md py-2 mt-4 hover:bg-blue-600 transition"
        >
          Pay ₹{amount || 0}
        </button>

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

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-96">
            <h3 className="text-lg font-medium text-gray-600">Thank You!</h3>
            <h2 className="text-xl font-bold text-gray-800 mt-2">
              Your Contribution Matters 🎉
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              We are deeply grateful for your support towards Srikula Foundation. Your help empowers lives!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

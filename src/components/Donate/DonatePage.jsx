import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from '../../assets/gallery/galleryBg.png'
import logo from '../../assets/srikulalogo.png'
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
    <div
      className="flex justify-center items-center  min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    > 
      <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold text-gray-800 mt-1 animate-slideIn">Kashmir Literature Festival, A Srikula Foundation initiative.</h2>
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-center shadow-lg mt-8">
        {/* Logo Section */}
        <div className="w-16 h-16 text-white rounded-full mx-auto flex items-center justify-center mb-4">
          <img src={logo} alt="logo"/>
        </div>

        {/* Title Section */}
        <h3 className="text-lg font-medium text-gray-600">Paying</h3>
        <p className="text-sm text-blue-500 mt-2">razorpay.me/@srikulafoundation</p>

        {/* Donation Amount Input */}
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

        {/* Note Input */}
        <input
          type="text"
          placeholder="Add a note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border bg-gray-100 text-black text-center mt-5 mb-5 py-1 rounded"
        />

        {/* Submit Button */}
        <button
          onClick={handleDonation}
          className="w-full bg-[#BA451C] text-white font-medium rounded-md py-2 mt-4 hover:bg-[#9a3715] transition-all"
        >
          Pay ₹{amount || 0}
        </button>

        {/* Footer Section */}
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

      {/* Popup Section */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-[90%] max-w-md">
            <h3 className="text-lg font-medium text-gray-600">Thank You!</h3>
            <h2 className="text-xl font-bold text-gray-800 mt-2">
              Your Contribution Matters 🎉
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              We are deeply grateful for your support towards Srikula Foundation.
              Your help empowers lives!
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
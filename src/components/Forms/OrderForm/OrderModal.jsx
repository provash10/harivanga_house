"use client";

import React, { useState } from "react";

const OrderModal = ({ isOpen, onClose, mango, orderQuantity, totalPrice }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "Cash on Delivery",
        transactionId: "",
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    if (!isOpen) return null;

    // Payment Numbers (Placeholder, needs to be updated by USER)
    const paymentNumbers = {
        bKash: "01XXXXXXXXX (Personal)",
        Nagad: "01XXXXXXXXX (Personal)",
        Rocket: "01XXXXXXXXX (Personal)",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Prepare data to send to Google Sheet Webhook
        const payload = {
            date: new Date().toISOString(),
            productName: mango?.name || "Unknown Mango",
            productId: mango?._id || mango?.id || "",
            quantity: orderQuantity,
            price: mango?.price || 0,
            totalPrice: totalPrice,
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            paymentMethod: formData.paymentMethod,
            transactionId: formData.paymentMethod !== "Cash on Delivery" ? formData.transactionId : "N/A",
        };

        const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;
        
        if (!webhookUrl) {
            console.error("Webhook URL is missing! Check .env file.");
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        try {
            // Google Apps Script usually requires a mode like 'no-cors' for POSTs from browsers
            // Or you can use application/x-www-form-urlencoded depending on the script.
            // Using standard JSON approach.
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain", // Important for Apps Script CORS
                },
                body: JSON.stringify(payload),
            });

            if (response.ok || response.type === 'opaque') {
                setSubmitStatus('success');
                // Optional: Close modal after success
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                    setFormData({
                        name: "",
                        phone: "",
                        address: "",
                        paymentMethod: "Cash on Delivery",
                        transactionId: "",
                    });
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
                
                {/* Header */}
                <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-gray-100 flex justify-between items-center rounded-t-3xl">
                    <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
                    <button 
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6 md:p-8">
                    {submitStatus === 'success' ? (
                        <div className="text-center py-10">
                            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h3>
                            <p className="text-gray-500">Thank you for your purchase. We will contact you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            
                            {/* Order Summary */}
                            <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold mb-1">Ordering</p>
                                    <p className="font-bold text-gray-800">{mango?.name} <span className="text-orange-500">({orderQuantity}kg)</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 font-semibold mb-1">Total</p>
                                    <p className="font-bold text-2xl text-orange-500">৳ {totalPrice}</p>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3">Delivery Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input 
                                            required
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input 
                                            required
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="01XXXXXXXXX"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                                        <textarea 
                                            required
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder="House, Road, Area, City"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3">Payment Method</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {["Cash on Delivery", "bKash", "Nagad", "Rocket"].map((method) => (
                                        <label 
                                            key={method} 
                                            className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === method ? 'border-orange-500 bg-orange-50 shadow-sm ring-1 ring-orange-500' : 'border-gray-200 hover:border-orange-300'}`}
                                        >
                                            <input 
                                                type="radio" 
                                                name="paymentMethod" 
                                                value={method} 
                                                checked={formData.paymentMethod === method} 
                                                onChange={handleChange}
                                                className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                                            />
                                            <span className="ml-3 font-medium text-gray-700">{method}</span>
                                        </label>
                                    ))}
                                </div>

                                {/* Conditionally Render TrxID Field */}
                                {formData.paymentMethod !== "Cash on Delivery" && (
                                    <div className="mt-4 p-5 bg-gray-50 border border-gray-200 rounded-xl animate-fade-in-up">
                                        <p className="text-sm text-gray-600 mb-4">
                                            Please send exactly <strong className="text-gray-900">৳ {totalPrice}</strong> to our {formData.paymentMethod} number: 
                                            <span className="block text-lg font-bold text-orange-600 mt-1">{paymentNumbers[formData.paymentMethod]}</span>
                                        </p>
                                        
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID (TrxID)</label>
                                        <input 
                                            required
                                            type="text" 
                                            name="transactionId"
                                            value={formData.transactionId}
                                            onChange={handleChange}
                                            placeholder={`Enter your ${formData.paymentMethod} TrxID`}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all uppercase"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Submit Error */}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm">
                                    Something went wrong while submitting the order. Please try again.
                                    {!process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL && (
                                        <span className="block font-bold mt-1">Developer: Please add NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL to .env</span>
                                    )}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Processing Order...
                                    </>
                                ) : (
                                    <>Confirm Order • ৳ {totalPrice}</>
                                )}
                            </button>

                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderModal;

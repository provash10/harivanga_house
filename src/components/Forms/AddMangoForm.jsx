"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddMangoForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    
    // Collect up to 5 images, filtering out empty ones
    const image1 = formData.get("image1") || "https://placehold.co/600x400/png?text=Main+Image";
    const image2 = formData.get("image2");
    const image3 = formData.get("image3");
    const image4 = formData.get("image4");
    const image5 = formData.get("image5");
    
    const imagesArray = [image1, image2, image3, image4, image5].filter(img => img && img.trim() !== "");

    const newMango = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),
      short_description: formData.get("short_description"),
      description: formData.get("description"),
      images: imagesArray,
      image: imagesArray[0], // Keep main image for backward compatibility with existing cards
    };

    try {
      const res = await fetch("/api/mangoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMango),
      });

      if (res.ok) {
        // Redirect to mangoes page after successful addition
        router.push("/mangoes");
        router.refresh();
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Failed to add mango");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200 my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Mango</h2>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mango Name</label>
            <input 
              type="text" 
              name="name" 
              required
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" 
              placeholder="e.g. Harivanga Premium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price per kg (৳)</label>
              <input 
                type="number" 
                name="price" 
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" 
                placeholder="e.g. 150"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Base Quantity (kg)</label>
              <input 
                type="number" 
                name="quantity" 
                defaultValue="1"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" 
                placeholder="e.g. 1"
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
          <h3 className="font-semibold text-gray-700 mb-2">Image URLs (Up to 5)</h3>
          <div>
            <input 
              type="url" 
              name="image1" 
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500 mb-2" 
              placeholder="Main Image URL (https://...)"
            />
            <div className="grid grid-cols-2 gap-2">
              <input type="url" name="image2" className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-orange-500" placeholder="Image 2 URL (Optional)" />
              <input type="url" name="image3" className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-orange-500" placeholder="Image 3 URL (Optional)" />
              <input type="url" name="image4" className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-orange-500" placeholder="Image 4 URL (Optional)" />
              <input type="url" name="image5" className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-orange-500" placeholder="Image 5 URL (Optional)" />
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
            <input 
              type="text" 
              name="short_description" 
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500" 
              placeholder="A short tagline..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Description</label>
            <textarea 
              name="description" 
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-orange-500 resize-none" 
              placeholder="Detailed description of the mango..."
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-orange-500 text-white font-bold py-3.5 rounded-xl hover:bg-orange-600 transition disabled:bg-gray-400 text-lg shadow-sm"
        >
          {loading ? "Adding Mango..." : "Publish Mango"}
        </button>
      </form>
    </div>
  );
};

export default AddMangoForm;
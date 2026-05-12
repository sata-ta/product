import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/product.json";

function ProductDetail({
  cartItems,
  setcartItems,
  wishlistItems,
  setwishlistItems,
}) {
  const { id } = useParams();

  const [product, setproduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === Number(id));

    setproduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* IMAGE */}
        <div className="bg-white rounded-[40px] p-10 shadow-xl border border-slate-200 relative overflow-hidden">
          <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl top-[-100px] right-[-100px]"></div>

          <img
            src={product.picture}
            alt={product.name}
            className="relative z-10 w-full h-[500px] object-contain hover:scale-105 transition-all duration-500"
          />
        </div>

        <div>
          <p className="uppercase tracking-[4px] text-blue-600 font-semibold mb-4">
            Premium Technology
          </p>

          <h1 className="text-5xl font-black leading-tight text-slate-900">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-6">
            <div className="flex text-yellow-400 text-2xl">★★★★★</div>

            <p className="text-slate-500 text-lg">(4.9 Reviews)</p>
          </div>

          <div className="mt-8 flex items-center gap-5 flex-wrap">
            <h2 className="text-5xl font-black text-blue-600">
              {product.price} $
            </h2>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              In Stock
            </span>
          </div>

          <p className="text-slate-600 text-lg leading-8 mt-8">
            Experience premium performance and modern design with this powerful
            technology product. Built for speed, productivity, and entertainment
            with advanced features and high-quality materials.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg">⚡ Fast Performance</h3>
              <p className="text-slate-500 mt-2">
                Optimized for speed and multitasking.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg">🔋 Long Battery</h3>
              <p className="text-slate-500 mt-2">
                All-day battery life for productivity.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg">🛡 Premium Quality</h3>
              <p className="text-slate-500 mt-2">
                Durable build and modern materials.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg">🚚 Free Delivery</h3>
              <p className="text-slate-500 mt-2">
                Fast and secure worldwide shipping.
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-12 flex-wrap">
            <button
              onClick={() => {
                setwishlistItems((prev) => [...prev, product]);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg"
            >
              Add To Wishlist
            </button>

            <button
              onClick={() => {
                setcartItems((prev) => [...prev, product]);
              }}
              className="bg-white border border-slate-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-50 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto mt-24">
        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-200 overflow-hidden">
          <h2 className="text-4xl font-black mb-10">Product Specifications</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex justify-between border-b border-slate-200 py-4">
              <span className="font-semibold">Brand</span>
              <span className="text-slate-500">Premium Tech</span>
            </div>

            <div className="flex justify-between border-b border-slate-200 py-4">
              <span className="font-semibold">Warranty</span>
              <span className="text-slate-500">1 Year</span>
            </div>

            <div className="flex justify-between border-b border-slate-200 py-4">
              <span className="font-semibold">Shipping</span>
              <span className="text-slate-500">Worldwide</span>
            </div>

            <div className="flex justify-between border-b border-slate-200 py-4">
              <span className="font-semibold">Condition</span>
              <span className="text-slate-500">Brand New</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;

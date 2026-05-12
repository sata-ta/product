import React from "react";

function Wishlistpage({ wishlistItems, setwishlistItems }) {
  const removeWishlist = (id) => {
    const updatedItems = wishlistItems.filter((item) => item.id !== id);
    setwishlistItems(updatedItems);
  };

  return (
    <div className="bg-slate-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-12">
          <div>
            <p className="uppercase tracking-[4px] text-pink-500 font-semibold mb-3">
              Wishlist Collection
            </p>

            <h1 className="text-5xl font-black text-slate-900">My Wishlist</h1>
          </div>

          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm">Saved Products</p>
            <h2 className="text-3xl font-black mt-1">{wishlistItems.length}</h2>
          </div>
        </div>

        {/* EMPTY */}
        {wishlistItems.length === 0 && (
          <div className="bg-white rounded-[40px] p-16 text-center shadow-sm border border-slate-200">
            <div className="text-7xl mb-6">💖</div>

            <h2 className="text-4xl font-black text-slate-900">
              Your Wishlist Is Empty
            </h2>

            <p className="text-slate-500 text-lg mt-5 leading-8 max-w-xl mx-auto">
              Save your favorite products here so you can easily find them
              later.
            </p>
          </div>
        )}

        {/* PRODUCTS */}
        {wishlistItems.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[35px] overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* IMAGE */}
                <div className="bg-slate-100 overflow-hidden p-8 h-[320px] flex items-center justify-center relative">
                  <button
                    onClick={() => removeWishlist(item.id)}
                    className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full text-lg transition-all z-10"
                  >
                    ✕
                  </button>

                  <img
                    src={item.picture}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <p className="uppercase tracking-[3px] text-pink-500 text-sm font-semibold mb-3">
                    Favorite Product
                  </p>

                  <h2 className="text-3xl font-black text-slate-900 leading-tight">
                    {item.name}
                  </h2>

                  <p className="text-slate-500 mt-5 leading-7">
                    Premium technology product with modern performance and
                    elegant design.
                  </p>

                  <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
                    <h3 className="text-4xl font-black text-pink-500">
                      ${item.price}
                    </h3>

                    <button className="bg-slate-900 hover:bg-slate-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlistpage;

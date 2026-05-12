import React from "react";

function Cartpage({ cartItems, setcartItems }) {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setcartItems(updatedItems);
  };

  return (
    <div className="bg-slate-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-12">
          <div>
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold mb-3">
              Your Cart
            </p>

            <h1 className="text-5xl font-black text-slate-900">
              Shopping Cart
            </h1>
          </div>

          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm">Total Items</p>
            <h2 className="text-3xl font-black mt-1">
              {cartItems.length}
            </h2>
          </div>
        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 && (
          <div className="bg-white rounded-[40px] p-16 text-center shadow-sm border border-slate-200">
            <div className="text-7xl mb-6">🛒</div>

            <h2 className="text-4xl font-black text-slate-900">
              Your Cart Is Empty
            </h2>

            <p className="text-slate-500 text-lg mt-5 leading-8 max-w-xl mx-auto">
              Looks like you have not added any products to your shopping cart yet.
            </p>
          </div>
        )}

        {/* CART ITEMS */}
        {cartItems.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[35px] p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 items-center"
                >

                  {/* IMAGE */}
                  <div className="bg-slate-100 rounded-3xl p-6 w-full md:w-[220px] h-[220px] flex items-center justify-center">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="flex-1 w-full">
                    <p className="uppercase tracking-[3px] text-blue-600 text-sm font-semibold mb-3">
                      Premium Product
                    </p>

                    <h2 className="text-3xl font-black text-slate-900 leading-tight">
                      {item.name}
                    </h2>

                    <p className="text-slate-500 mt-5 leading-7">
                      High-quality modern technology product with premium
                      performance and stylish design.
                    </p>

                    <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
                      <h3 className="text-4xl font-black text-blue-600">
                        ${item.price}
                      </h3>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div>
              <div className="bg-white rounded-[35px] p-8 shadow-sm border border-slate-200 sticky top-10">

                <h2 className="text-3xl font-black text-slate-900 mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">
                  <div className="flex justify-between text-slate-600 text-lg">
                    <span>Items</span>
                    <span>{cartItems.length}</span>
                  </div>

                  <div className="flex justify-between text-slate-600 text-lg">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="flex justify-between text-slate-600 text-lg">
                    <span>Tax</span>
                    <span>$20</span>
                  </div>
                </div>

                <hr className="my-8 border-slate-200" />

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-slate-900">
                    Total
                  </span>

                  <span className="text-4xl font-black text-blue-600">
                    ${totalPrice + 20}
                  </span>
                </div>

                <button className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cartpage;

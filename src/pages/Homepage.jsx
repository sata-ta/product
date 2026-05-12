import React from "react";

function Homepage() {
  const products = [
    {
      id: 1,
      name: "MacBook Pro M3",
      price: "$2199",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "$1199",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Sony Headphone",
      price: "$399",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Apple Watch",
      price: "$499",
      image:
        "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen text-slate-900">
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4">
            New Technology Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Upgrade Your
            <span className="text-blue-600"> Digital </span>
            Lifestyle
          </h1>

          <p className="mt-6 text-slate-600 text-lg leading-8 max-w-xl">
            Discover premium gadgets, laptops, smartphones, and accessories
            designed for modern people who love technology and innovation.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl font-semibold transition-all shadow-lg">
              Shop Now
            </button>

            <button className="bg-white border border-slate-300 px-7 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all">
              Explore
            </button>
          </div>

          <div className="flex gap-10 mt-12 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-slate-500 mt-1">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-slate-500 mt-1">Premium Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-slate-500 mt-1">Customer Support</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop"
            alt="hero"
            className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-6">
              🚚
            </div>
            <h3 className="text-2xl font-bold">Fast Delivery</h3>
            <p className="text-slate-600 mt-3 leading-7">
              Get your products quickly with secure and fast worldwide shipping.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-6">
              🔒
            </div>
            <h3 className="text-2xl font-bold">Secure Payment</h3>
            <p className="text-slate-600 mt-3 leading-7">
              Your payment and personal data are always protected and encrypted.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl mb-6">
              ⭐
            </div>
            <h3 className="text-2xl font-bold">Premium Quality</h3>
            <p className="text-slate-600 mt-3 leading-7">
              We provide only the best and latest technology products.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-sm">
          <p className="text-center text-slate-500 uppercase tracking-[4px] font-semibold mb-10">
            Trusted By Popular Brands
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div className="text-3xl font-black text-slate-700">APPLE</div>
            <div className="text-3xl font-black text-slate-700">SONY</div>
            <div className="text-3xl font-black text-slate-700">SAMSUNG</div>
            <div className="text-3xl font-black text-slate-700">DELL</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
          alt="workspace"
          className="rounded-[40px] shadow-xl h-[500px] object-cover w-full"
        />

        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4">
            About Our Store
          </p>

          <h2 className="text-5xl font-black leading-tight">
            We Build The Future Of Technology
          </h2>

          <p className="text-slate-600 mt-8 text-lg leading-8">
            Our mission is to provide premium technology products with modern
            design, powerful performance, and affordable prices for everyone.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-3xl font-black text-blue-600">5+</h3>
              <p className="mt-2 text-slate-600">Years Experience</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-3xl font-black text-blue-600">50K+</h3>
              <p className="mt-2 text-slate-600">Products Sold</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-slate-900 rounded-[40px] overflow-hidden p-10 lg:p-16 text-white grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-blue-400 font-semibold">
              Limited Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
              Get 30% Discount On New Collection
            </h2>

            <p className="text-slate-300 mt-6 leading-8 text-lg">
              Upgrade your setup today with our latest premium devices and
              accessories.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-2xl font-semibold transition-all">
              Start Shopping
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt="technology"
            className="rounded-3xl h-[350px] w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
export default Homepage;

// Productpage.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Productpage({ search }) {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const FetchAPi = async () => {
      const req = await fetch("http://localhost:3000/products");

      const res = await req.json();

      setproduct(res);
    };

    FetchAPi();
  }, []);

  const search_product = product.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {search_product.map((item) => (
          <div className="bg-white p-4 border border-slate-200 shadow-sm rounded-lg hover:shadow-lg transition-all">
            <div className="aspect-[3/2] w-full flex items-center justify-center">
              <img
                src={item.picture}
                className="max-h-full w-auto object-contain"
                alt={item.name}
              />
            </div>

            <hr className="border-slate-300 my-6" />

            <div>
              <h3 className="text-slate-900 text-lg font-semibold">
                {item.name}
              </h3>

              <div className="mt-6 flex justify-between items-center gap-4 flex-wrap">
                <span className="text-xl text-slate-900 font-bold">
                  ${item.price}
                </span>
                <Link key={item.id} to={`/product/${item.id}`}>
                  <button className="py-2 px-4 text-sm rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all">
                    Order now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productpage;

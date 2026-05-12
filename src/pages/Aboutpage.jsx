import React from "react";

function Aboutpage() {
  const team = [
    {
      id: 1,
      name: "John Carter",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "David Lee",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
          alt="office"
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          <div>
            <p className="uppercase tracking-[4px] text-blue-400 font-semibold mb-4">
              About Our Company
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Building The Future
              <br />
              Of Technology
            </h1>

            <p className="text-slate-200 text-lg mt-6 max-w-2xl mx-auto leading-8">
              We create premium digital experiences and provide the latest
              technology products for modern lifestyles.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[4px] text-blue-600 font-semibold mb-4">
            Our Story
          </p>

          <h2 className="text-5xl font-black leading-tight">
            Passionate About Innovation
          </h2>

          <p className="text-slate-600 text-lg leading-8 mt-8">
            Founded in 2020, our company started with one goal: to make premium
            technology accessible for everyone. From smartphones to powerful
            laptops and accessories, we deliver products that improve daily
            life.
          </p>

          <p className="text-slate-600 text-lg leading-8 mt-6">
            Today, thousands of customers trust us because of our commitment to
            quality, modern design, and excellent customer experience.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-4xl font-black text-blue-600">10K+</h3>
              <p className="text-slate-500 mt-2">Happy Customers</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-4xl font-black text-blue-600">500+</h3>
              <p className="text-slate-500 mt-2">Premium Products</p>
            </div>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
          alt="team"
          className="rounded-[40px] shadow-2xl h-[600px] object-cover w-full"
        />
      </section>

      {/* MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-200">
            <div className="w-16 h-16 rounded-3xl bg-blue-100 flex items-center justify-center text-3xl mb-8">
              🚀
            </div>

            <h3 className="text-4xl font-black">Our Mission</h3>

            <p className="text-slate-600 text-lg leading-8 mt-6">
              To provide modern technology products with premium quality,
              affordable prices, and outstanding customer service.
            </p>
          </div>

          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-200">
            <div className="w-16 h-16 rounded-3xl bg-green-100 flex items-center justify-center text-3xl mb-8">
              🌎
            </div>

            <h3 className="text-4xl font-black">Our Vision</h3>

            <p className="text-slate-600 text-lg leading-8 mt-6">
              To become one of the leading technology brands trusted by millions
              of people around the world.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-blue-600 font-semibold mb-4">
            Our Team
          </p>

          <h2 className="text-5xl font-black">Meet The Creative Team</h2>

          <p className="text-slate-600 text-lg leading-8 mt-6">
            Our talented team works together to deliver amazing digital
            experiences and technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover"
              />

              <div className="p-8 text-center">
                <h3 className="text-2xl font-black">{member.name}</h3>
                <p className="text-blue-600 font-semibold mt-3">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-[40px] p-12 lg:p-16 text-center text-white overflow-hidden relative">
          <div className="absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
          <div className="absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[4px] text-blue-400 font-semibold mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Ready To Work With Us?
            </h2>

            <p className="text-slate-300 text-lg leading-8 mt-6 max-w-2xl mx-auto">
              Join thousands of happy customers and experience the future of
              technology today.
            </p>

            <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold transition-all text-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutpage;

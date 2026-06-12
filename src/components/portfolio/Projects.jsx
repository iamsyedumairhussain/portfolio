import React from "react";
import dc1 from '../../assets/images/project-images/Dubai customs/dc1.jpg'
import dc2 from '../../assets/images/project-images/Dubai customs/dc2.jpg'
import dc3 from '../../assets/images/project-images/Dubai customs/dc3.jpg'
import dc4 from '../../assets/images/project-images/Dubai customs/dc4.jpg'
import knpc1 from '../../assets/images/project-images/knpc/knpc1.avif'
import knpc2 from '../../assets/images/project-images/knpc/knpc2.avif'
import knpc3 from '../../assets/images/project-images/knpc/knpc3.avif'
import knpc4 from '../../assets/images/project-images/knpc/knpc4.avif'
import c71 from '../../assets/images/project-images/canary7/c71.webp'
import c72 from '../../assets/images/project-images/canary7/c72.webp'
import c73 from '../../assets/images/project-images/canary7/c73.jpg'
import orion1 from '../../assets/images/project-images/orion/orion1.jpg'
import orion2 from '../../assets/images/project-images/orion/orion2.jpg'
import orion3 from '../../assets/images/project-images/orion/orion3.jpg'
import orion4 from '../../assets/images/project-images/orion/orion4.jpg'  

import fba1 from '../../assets/images/project-images/fba/fba6.jpg'
import fba2 from '../../assets/images/project-images/fba/fba5.jpg'
import fba6 from '../../assets/images/project-images/fba/fba6.jpg'
import aliaacademy1 from '../../assets/images/project-images/aliaacdemy/aliaacademy4.jpg'
import aliaacademy2 from '../../assets/images/project-images/aliaacdemy/aliaacademy2.jpg'
import aliaacademy3 from '../../assets/images/project-images/aliaacdemy/aliaacademy3.jpg'

export default function Projects() {
  return (
    <section className="relative bg-[#05060A] text-gray-200  overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-60 -left-60 w-[700px] h-[700px] bg-indigo-600/25 blur-[160px]" />
      <div className="absolute top-1/2 -right-60 w-[600px] h-[600px] bg-purple-600/25 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 space-y-30">

        <div className="relative grid lg:grid-cols-12 gap-20 pt-30">

          {/* LEFT — STICKY CONTENT */}
          <div className="lg:col-span-5" >
            <div className="sticky top-32">

              {/* PROJECT TITLE */}
              <h3 className="text-4xl font-bold mb-8">
                Dubai Customs - Smart trade and border services
              </h3>

              <p className="text-gray-400  mb-12">
                Enhancing trade efficiency and border security through DC smart innovation and digital services for seamless operations
              </p>

              {/* META INFO */}
              <div className="grid grid-cols-2 gap-6 mb-14">
                {[
                  ["Role", "Streamlined Setup and Operations"],
                  ["Type", "Industry-Specific Free Zones"],
                  ["Users", "Easy Access to Global Markets"],
                  ["Focus", "Technological Innovation"],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              {/* FEATURE CARDS */}
              <div className="space-y-6">
                {[
                  {
                    title: "Tax exemptions",
                    desc: "Businesses operating within a Dubai Free Zone typically enjoy tax benefits, including exemptions from corporate taxes for a set number of years (often up to 50 years). This makes free zones highly attractive for foreign investors and companies.",
                    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>
                  },
                  {
                    title: "Free zone authorities",
                    desc: "Jebel Ali Free Zone (JAFZA): The largest and most well-known free zone, focused on manufacturing and logistics. Dubai Internet City (DIC): A hub for IT, tech, and innovation-based companies. Dubai Media City (DMC): Focuses on media and creative industries. Dubai Silicon Oasis (DSO): A tech and innovation-focused zone offering integrated solutions for businesses. Dubai International Financial Centre (DIFC): A financial hub for banking, insurance, and investment firms.",
                    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>

                  },
                  {
                    title: "Security and compliance",
                    desc: "The department enforces strict regulations to ensure that goods entering or leaving Dubai comply with international standards. This includes monitoring and inspecting shipments to prevent illegal activities such as smuggling and trafficking, ensuring that prohibited or restricted goods do not enter the market.",
                    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 transition"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition" />

                    <div className="flex items-center gap-4 mb-3">
                    {item.svg}
                      <h4 className="text-lg font-semibold">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — IMAGE STORY */}
          <div className="lg:col-span-7 space-y-16">

            {/* IMAGE BLOCK 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-2xl" />
              <img
                src={dc1}
                alt="Analytics dashboard"
                className="relative w-full h-[420px] object-cover rounded-3xl border border-cyan-400/30 hover:scale-[1.02] transition"
              />
            </div>

            {/* IMAGE BLOCK 2 — SPLIT */}
            <div className="grid grid-cols-2 gap-6">
              <img
                src={dc2}
                alt="Collaboration"
                className="h-[260px] w-full object-cover rounded-3xl border border-indigo-400/30 hover:scale-[1.03] transition"
              />
              <img
                src={dc3}
                alt="Team analytics"
                className="h-[260px] w-full object-cover rounded-3xl border border-cyan-400/30 hover:scale-[1.03] transition"
              />
            </div>

            {/* IMAGE BLOCK 3 — FULL WIDTH */}
            <img
              src={dc4}
              alt="Advanced data visualization"
              className="w-full h-[320px] object-cover rounded-3xl border border-indigo-400/30 hover:scale-[1.02] transition"
            />
          </div>
        </div>

                              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />



        <section className="bg-[#05060A] text-gray-200  overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">

            {/* SECTION HEADER */}
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"> */}
                Orion - GCC Metaverse platform
                {/* </span> */}
              </h2>
              <p className="my-6 max-w-4xl text-gray-400">
                Introducing Orion, a ground-breaking AI-enabled metaverse platform meticulously crafted to meet the unique demands of enterprises. Orion stands as the first-of-its-kind solution, thoughtfully designed with the core principles of Artificial Intelligence, Blockchain, and Web 3.0 at its heart. This innovative platform empowers organizations to seamlessly integrate cutting-edge technologies, providing an immersive metaverse experience that combines intelligent automation, secure transactions, and the decentralized capabilities of the future web. Orion marks a significant step forward in transforming how businesses engage with virtual environments, offering a dynamic and versatile solution tailored to enterprise needs


              </p>
            </div>

            {/* FULL WIDTH HERO */}
            <div className="relative mb-20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-3xl" />
              <img
                src={orion2}
                alt="Enterprise analytics dashboard"
                className="relative w-full h-[520px] object-cover rounded-[36px] border border-cyan-400/30"
              />

              {/* HERO OVERLAY CARD */}
              <div className="absolute bottom-10 left-10 max-w-xl rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold mb-3">
                  Blockchain-Powered Virtual Ecosystem
                </h3>
                <p className="text-gray-300">
                  Built on Blockchain technology, Orion ensures secure, transparent, and tamper-proof transactions within the metaverse, enabling businesses to engage in trust-based virtual economies.
                </p>
              </div>
            </div>

            {/* IMAGE FLOW SECTION */}
            <div className="grid lg:grid-cols-12 gap-16 mb-10">

              {/* LEFT LARGE IMAGE */}
              <div className="lg:col-span-7">
                <img
                  src={orion4}
                  alt="Team collaboration"
                  className="w-full h-[420px] object-cover rounded-3xl border border-indigo-400/30 hover:scale-[1.02] transition"
                />
              </div>

              {/* RIGHT STACK */}
              <div className="lg:col-span-5 space-y-10">
                <img
                  src={orion1}
                  alt="Data insights"
                  className="w-full h-[220px] object-cover rounded-3xl border border-cyan-400/30 hover:scale-[1.03] transition"
                />
                <img
                  src={orion3}
                  alt="Advanced analytics"
                  className="w-full h-[260px] object-cover rounded-3xl border border-indigo-400/30 hover:scale-[1.03] transition"
                />
              </div>
            </div>

            {/* FEATURE MATRIX */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold mb-14">
                Platform Capabilities
              </h4>

              <div className="grid lg:grid-cols-3 gap-10">
                {[
                  {
                    title: "Orion Web 3.0 for Businesses",
                    desc: "Orion uses Web 3.0 to create decentralized, user-centric experiences with enhanced privacy and control.",
                    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ac5cf6" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

                  },
                  {
                    title: "Collaborative Virtual Spaces",
                    desc: "Orion enables businesses to create virtual spaces for real-time collaboration and global engagement.",
                    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ac5cf6" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                  },
                  {
                    title: "Revolutionizing Financial Services",
                    desc: "Orion offers secure metaverse banking and decentralized financial services for virtual transactions.",
svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ac5cf6" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                  },
                  {
                    title: "Global Reach, Local Flexibility",
                    desc: "Orion serves businesses globally with flexible solutions tailored to local markets and regulations.",
svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ac5cf6" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
</svg>
                  },
                  {
                    title: "Secure, Decentralized Transactions",
                    desc: "Orion ensures secure and decentralized transactions, giving businesses confidence in their digital activities.",
svg: <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ac5cf6" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
                  },
                  {
                    title: "Future of Enterprise Interactions",
                    desc: "Orion transforms how businesses engage with clients and partners using AI and blockchain-powered environments.",
svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ac5cf6" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 transition"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition" />
                    <div className="flex items-center gap-4 mb-4">
                  {item.svg}
                      <h5 className="text-md font-semibold">{item.title}</h5>
                    </div>

                    <p className=" text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* BOTTOM DIVIDER */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>
        </section>
        {/* ---------------- PROJECT 1: Enterprise Analytics Platform ---------------- */}
        <div className="relative">
          <h3 className="text-4xl font-bold mb-8">Kuwait National Petroleum Company</h3>
          <p className="max-w-3xl text-gray-400  mb-16">

            The Kuwait National Petroleum Company is the national oil refining company of Kuwait. Established in October 1960, KNPC has the mandate for oil refining, gas liquefaction, and distribution of petroleum goods within the local market. KNPC also handles CFP.

          </p>

          {/* Cinematic collage */}
          <div className="relative h-[520px]">
            <img
              src={knpc1}
              style={{ top: 0, left: 0, width: '55%', height: '65%' }}
              className="absolute object-cover rounded-3xl border border-cyan-400/30 hover:scale-105 transition"
            />
            <img
              src={knpc2}
              style={{ top: 40, right: 0, width: '38%', height: '45%' }}
              className="absolute object-cover rounded-3xl border border-indigo-400/30 hover:scale-105 transition"
            />
            <img
              src={knpc3}
              style={{ bottom: 0, left: 80, width: '40%', height: '40%' }}
              className="absolute object-cover rounded-3xl border border-cyan-400/30 hover:scale-105 transition"
            />
            <img
              src={knpc4}
              style={{ bottom: 24, right: 112, width: '32%', height: '35%' }}
              className="absolute object-cover rounded-3xl border border-indigo-400/30 hover:scale-105 transition"
            />
          </div>

          {/* Features */}
          <div className="mt-24 grid lg:grid-cols-3 gap-12">
            {[
              ["KNPC's Downstream & Refining Role", "KNPC operates as the refining and marketing arm of Kuwait Petroleum, handling refining, gas processing, and local petroleum distribution, while owning stakes in key companies like KAFCO and KARO.", <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>
  ],
              ["Refineries and Gas Processing", "KNPC manages two major refineries, Mina Al-Ahmadi and Mina Abdullah, with a combined capacity of 800,000 BPD, and operates a gas processing plant with a production capacity of 3.1 billion standard cubic feet of gas.",<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>
],
              ["Shipping and Export Facilities", "KNPC oversees 5 shipping ports, including piers at Mina Al-Ahmadi and Mina Abdullah, and the Shuaiba oil berth, enabling efficient export of petroleum products.", <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>
],
            ].map(([title, desc, c1], i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition" />
                <div className="flex items-center gap-4 mb-3">
                  {c1}
                  <h4 className="text-md font-semibold">{title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />





        <div className="relative">

          {/* TOP GRADIENT BORDER */}

          <section className=" text-gray-200">
            <div className=" mx-auto px-6">

              {/* HEADER */}
              <div className="mb-24">
                <h2 className="text-4xl font-bold tracking-tight">
                  Canary7 - Warehouse Management System
                </h2>
                <p className="mt-6 max-w-2xl text-gray-400">
                  Canary7 is a flexible and scalable WMS that enhances efficiency and productivity by streamlining warehouse operations with smart features and cloud technology.Seamlessly integrate with ecommerce platforms, reducing order fulfillment errors and boosting customer satisfaction through real-time inventory and order management.
                </p>
              </div>

              {/* BENTO GRID */}
              <div className="grid grid-cols-12 gap-8">

                {/* LARGE OVERVIEW */}
                <div className="col-span-12 lg:col-span-7 relative group">
                  <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative rounded-[36px] overflow-hidden border border-white/10">
                    <img
                      src={c71}
                      alt="Analytics overview"
                      className="w-full h-[420px] object-cover group-hover:scale-[1.04] transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-xl p-8">
                      <h3 className="text-2xl font-bold mb-2">
                        Cloud-Based WMS                </h3>
                      <p className="text-gray-300">
                        Take advantage of cloud technology for improved organization, fast order processing, and accessible data, reducing overhead costs and complexity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* METRICS */}
                <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-8">
                  {[
                    { label: "Ecommerce Platform Integrations", value: "77+" },
                    { label: "Carrier Integrations", value: "93+" },
                    { label: "Increase in Order Throughput", value: "400%" },
                    { label: "Uptime", value: "99.99%" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 transition"
                    >
                      <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* COLLAB IMAGE */}
                <div className="col-span-12 lg:col-span-4 relative group">
                  <img
                    src={c72}
                    alt="Collaboration"
                    className="w-full h-[320px] object-cover rounded-3xl border border-indigo-400/30 group-hover:scale-[1.03] transition"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* ARCHITECTURE */}
                <div className="col-span-12 lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-8">
                
                  <h4 className="text-lg font-semibold mb-3">Real time Sync </h4>
                  <p className="text-gray-400 text-sm">
                    Track inventory in real-time, reduce stockouts and overstocking, and ensure compliance with automated inventory management tools that optimize product flow
                  </p>
                </div>

                {/* FEATURE CARDS */}
                <div className="col-span-12 lg:col-span-4 grid gap-8">
                  {[
                    {
                      title: "API Integration Flexibility",
                      desc: "Integrate Canary7 with various business tools, such as ERP, CMS, and accounting software.",
svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>
                    },
                    {
                      title: "Desired Integration Options",
                      desc: "With Canary7, Eliminate concerns about costly, time-consuming software integrations.",
svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
</svg>
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="relative group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-fuchsia-400/40 transition"
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition" />

                      <div className="flex items-center gap-4 mb-3">
                       {item.svg}
                        <h4 className="text- font-semibold">{item.title}</h4>
                      </div>

                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* FINAL IMAGE */}

              </div>

              {/* DIVIDER */}
              <div className="mt-40 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />
            </div>
          </section>

          {/* PROJECT HEADER */}
          <div className="mb-16 mt-28">
            <h3 className="text-4xl font-bold mb-6">
              FBA Prep - 3PL Logistics and Fulfilment
            </h3>
            <p className="max-w-3xl text-gray-400 ">
              FBA Prep Services by Fullfilwave ensures your products are ready for Amazon's FBA requirements. Services include accurate labeling, poly bagging, bundling, and ensuring compliance with Amazon’s standards. This helps streamline your FBA process, reduce errors, and ensure timely shipments, making it easier for you to focus on growing your e-commerce business.



            </p>
          </div>

          {/* IMAGE SHOWCASE — CUSTOM LAYOUT */}
          <div className="relative grid grid-cols-12 gap-6 mb-24">
                            <div className="col-span-12">
                  <img
                    src={c73}
                    alt="Scalable analytics"
                    className="w-full h-[460px] object-cover rounded-[36px] border border-fuchsia-400/30 hover:scale-[1.02] transition"
                  />
                </div>

            {/* MAIN IMAGE */}
            <div className="col-span-12 lg:col-span-5">
              <img
                src={fba1}
                alt="Dashboard overview"
                className="relative rounded-[36px] border border-cyan-400/30"
              />
            </div>
            <div className="col-span-12 lg:col-span-5">
              <img
                src={fba2}
                alt="Dashboard overview"
                className="relative w-full  rounded-[36px] border border-cyan-400/30"
              />
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid lg:grid-cols-3 gap-10">

            {[
              {
                title: "Empowering E-commerce Success",
                desc: "Fullfilwave offers scalable and efficient logistics solutions for e-commerce businesses, supporting platforms like Amazon, eBay, and Shopify with services like FBA prep, warehousing, and global shipping.",
svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="size-5">
  <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
</svg>
              },
              {
                title: "Advanced Technology Integration",
                desc: "Fullfilwave’s cloud-based software integrates seamlessly with Shopify, Amazon, WooCommerce, and more, offering automation, real-time tracking, and efficient logistics management.",
svg:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="size-5">
  <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd" />
</svg>
              },
              {
                title: "Fullwaves solutions",
                desc: "Fullfilwave provides reliable, scalable logistics solutions for e-commerce businesses across the UK and Europe. Specializing in services like Amazon FBA prep, warehousing, pick and pack, and global shipping, they help online retailers streamline their operations.",
svg:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="size-5">
  <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
</svg>
              },
              {
                title: "Warehousing & Storage",
                desc: "Short and long-term storage across Europe.",
svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="size-5">
  <path fillRule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4Zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37ZM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 0 1 3 13.179Z" clipRule="evenodd" />
</svg>
              },
              {
                title: "Amazon FBA Prep",
                desc: "Labeling, poly bagging, bundling, and Amazon-compliant prep.",
svg:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="size-5">
  <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
</svg>
              },
              {
                title: "Global Shipping",
                desc: "Partnerships with UPS, DHL, FedEx for timely deliveries.",
svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="size-5">
  <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 0 0 2 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 0 0 6.5 3ZM2 12v2.5A1.5 1.5 0 0 0 3.5 16h.041a3 3 0 0 1 5.918 0h.791a.75.75 0 0 0 .75-.75V12H2Z" />
  <path d="M6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM13.25 5a.75.75 0 0 0-.75.75v8.514a3.001 3.001 0 0 1 4.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 0 0-1.784-8.549A1.486 1.486 0 0 0 14.823 5H13.25ZM14.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
</svg>
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 transition"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-3xl transition" />

                <div className="flex items-center gap-4 mb-4">
                  {item.svg}
                  <h4 className="text-md font-semibold">{item.title}</h4>
                </div>

                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>


        {/* BOTTOM GRADIENT DIVIDER */}
        <div className="mt-40 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>


      <section className="bg-[#06070B] text-gray-200 py-35">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight">
              Alia Academy - Health Education Academy
            </h2>
            <p className="mt-6 max-w-5xl text-gray-400 text-md">

              Alia Academy Overview

              Alia Academy is an educational platform focused on spreading health awareness across the Arab world. It offers courses, lectures, health trips, and media programs, promoting knowledge on nutrition, consciousness, and self-development.
            </p>
            <p className="mt-6 max-w-5xl text-gray-400 text-md">
              About Alia Al-Muayyad

              Alia Al-Muayyad is a nutritionist and researcher specializing in consciousness and natural healing. After a personal health crisis, she shifted from public relations to health, helping many in the Arab world on their wellness journeys. Alia has authored three books on nutrition and hosts a popular health program.

              This summary encapsulates Alia Academy's mission and Alia Al-Muayyad's background in health and wellness.

            </p>
          </div>

          {/* TIMELINE */}
      <div className="space-y-30">

            {/* STEP 1 — PROBLEM */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-3 h-3 rounded-full" />
              <div className="pl-12">
                <img
                  src={aliaacademy1}
                  alt="Disconnected workflows"
                  className="w-full h-[360px] object-cover rounded-3xl border border-white/10 hover:scale-[1.02] transition"
                />
              </div>
            </div>

            {/* STEP 2 — SOLUTION */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-3 h-3 rounded-full" />
              <div className="pl-12">

                {/* VISUAL PAIR */}
                <div className="grid lg:grid-cols-2 gap-10">
                  <img
                    src={aliaacademy2}
                    alt="Unified dashboard"
                    className="h-[300px] w-full object-cover rounded-3xl border border-cyan-400/30 hover:scale-[1.03] transition"
                  />
                  <img
                    src={aliaacademy3}
                    alt="Team collaboration"
                    className="h-[300px] w-full object-cover rounded-3xl border border-indigo-400/30 hover:scale-[1.03] transition"
                  />
                </div>
              </div>
            </div>

            {/* STEP 3 — FEATURES */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-3 h-3 rounded-full " />
              <div className="pl-12">

                <h3 className="text-2xl font-bold mb-12">
                  Core Capabilities
                </h3>

                <div className="grid lg:grid-cols-3 gap-10">
                  {[
                    {
                      title: "Comprehensive Health Education",
                      desc: "Offers a wide range of courses, lectures, and seminars focused on nutrition, self-development, and natural healing to raise health awareness in the Arab world.",
svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="size-5">
  <path d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0 0 18 15.06v-11a.75.75 0 0 0-.546-.721A9.006 9.006 0 0 0 15 3a8.963 8.963 0 0 0-4.25 1.065V16.82ZM9.25 4.065A8.963 8.963 0 0 0 5 3c-.85 0-1.673.118-2.454.339A.75.75 0 0 0 2 4.06v11a.75.75 0 0 0 .954.721A7.506 7.506 0 0 1 5 15.5c1.579 0 3.042.487 4.25 1.32V4.065Z" />
</svg>
                    },
                    {
                      title: "Expert-Led Programs",
                      desc: "Led by Alia Al-Muayyad, a certified nutritionist and health expert with extensive experience in consciousness and wellness, ensuring trusted and high-quality guidance.",
svg:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="size-5">
  <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clipRule="evenodd" />
</svg>
                    },
                    {
                      title: "Health Consultations & Programs",
                      desc: "Provides personalized health consultations, weight loss programs, and specialized health trips to support individual wellness journeys.",
svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="size-5">
  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
</svg>
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="relative group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 transition"
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition" />

                      <div className="flex items-center gap-4 mb-4">
                     {item.svg}
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                      </div>

                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER DIVIDER */}
          <div className="mt-40 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </div>
      </section>

    </section>
  );
}

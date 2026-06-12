import React from "react";
import wooCommerce from '../../assets/images/integrations/shopping-cart.png'
import shopify from '../../assets/images/integrations/shopify.png'
import sage from '../../assets/images/integrations/sage.png'
import acumaitca from '../../assets/images/integrations/clouds.png'
import sap from '../../assets/images/integrations/sap.png'
import unleashed from '../../assets/images/integrations/unleashed.png'
import brightpearl from '../../assets/images/integrations/letter-b.png'
import amazon from '../../assets/images/integrations/amazon.png'
import eBay from '../../assets/images/integrations/eBay.png'
import bluepark from '../../assets/images/integrations/bluepark.svg'
/* ---------- ICON ---------- */
const IconEngine = () => (
  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4v6h6" />
    <path d="M20 20v-6h-6" />
    <path d="M5 19a9 9 0 0014-7" />
    <path d="M19 5a9 9 0 00-14 7" />
  </svg>
);

/* ---------- DATA ---------- */
const erpIntegrations = [
  {
    name: "SAP Business One",
    logo: sap,
    log: "Inventory + financial posting synced",
  },
  {
    name: "Sage Intacct",
    logo: sage,
    log: "GL entries & payments processed",
  },
  {
    name: "Acumatica",
    logo: acumaitca,
    log: "Orders & fulfillment confirmed",
  },
  {
    name: "Brightpearl",
    logo: brightpearl,
    log: "Stock levels reconciled",
  },
];

const channelIntegrations = [
  {
    name: "Shopify",
    logo: shopify,
    log: "Order received via webhook",
  },
  {
    name: "Amazon",
    logo: amazon,
    log: "Listing & price update pushed",
  },
  {
    name: "WooCommerce",
    logo: wooCommerce,
    log: "Inventory availability synced",
  },
  {
    name: "eBay",
    logo: eBay,
    log: "Refund & return processed",
  },
];

export default function IntegrationEcosystem() {
  return (
    <section className=" relative overflow-hidden bg-slate-950 text-white py-40">

      {/* GLOWS */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">

        {/* HEADER */}
        <div className="max-w-4xl mb-28">
          <h2 className="text-6xl font-extrabold leading-tight">
            Ecommerce  <br />
            <span className="mt-50 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Channel Integration
            </span>
          </h2>
          <p className="mt-8 text-xl text-slate-300">
            Real commerce integrations powering live data flows between
            ERPs and high-volume sales channels.
          </p>
        </div>

        {/* FLOW */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-center">

          {/* ERP SIDE */}
          <div className="space-y-6">
            <h3 className="mb-10 text-center text-2xl font-semibold text-purple-400">
              ERP Platforms
            </h3>

            {erpIntegrations.map((erp) => (
              <div
                key={erp.name}
                className="group flex items-center gap-5 rounded-2xl backdrop-blur
                           border border-white/10 p-5
                           hover:border-indigo-400/40 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.6)]
                           transition-all duration-300"
              >
                <div className="h-16 w-32 flex items-center justify-center">
                  <img
                    src={erp.logo}
                    alt={erp.name}
                    className="max-h-10 object-contain   transition"
                  />
                </div>

                <div>
                  <div className="font-semibold text-lg">{erp.name}</div>
                  <div className="font-mono text-xs text-slate-400 mt-1">
                    {erp.log}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ENGINE */}
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 rounded-3xl bg-indigo-500 blur-xl opacity-40 group-hover:opacity-70 transition" />
              <div className="relative h-28 w-28 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600
                              flex items-center justify-center shadow-2xl
                              group-hover:scale-110 transition-transform duration-300">
                <IconEngine />
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold">Integration Engine</h4>
              <p className="text-sm text-slate-400 mt-1">
                Event-driven · Reliable · Scalable
              </p>
            </div>
          </div>

          {/* CHANNEL SIDE */}
          <div className="space-y-6">
            <h3 className="mb-10 text-center text-2xl font-semibold text-purple-400">
              E-commerce channels
            </h3>

            {channelIntegrations.map((channel) => (
              <div
                key={channel.name}
                className="group flex items-center gap-5 rounded-2xl backdrop-blur
                           border border-white/10 p-5
                           hover:border-purple-400/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.6)]
                           transition-all duration-300"
              >
                <div className="h-16 w-32 flex items-center justify-center">
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="max-h-10 object-contain group-hover:grayscale-0 transition"
                  />
                </div>

                <div>
                  <div className="font-semibold text-lg">{channel.name}</div>
                  <div className="font-mono text-xs text-slate-400 mt-1">
                    {channel.log}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

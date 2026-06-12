import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Application Design & Development",
    description: "Creating immersive digital stories through high-fidelity visuals and motion.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    icon: "✦"
  },
  {
    id: 2,
    title: "Web portals",
    description: "Engineering robust, scalable applications with a focus on real-time data.",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)",
    icon: "❈"
  },
  {
    id: 3,
    title: "Ecommerce Store",
    description: "Seamlessly connecting ecosystems with secure, high-performance middleware.",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
    icon: "◈"
  },
  {
    id: 4,
    title: "API Integration",
    description: "Conversion-optimized shopping experiences with custom checkout logic.",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    icon: "❖"
  },
  {
    id: 5,
    title: "Ecommerce channel & carrier integraion",
    description: "Conversion-optimized shopping experiences with custom checkout logic.",
    gradient: "linear-gradient(135deg, #78f65c 0%, #9f910e 100%)",
    icon: "✦"
  }
];

export default function ServicesSection() {
  return (
    <section id="services"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",  // Vertically center
        justifyContent: "center",  // Horizontally center
        padding: "80px 20px",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Inner Flex Container - Centralized Content */}
      < div
        style={{
          display: "flex",
          justifyContent: "space-between", // Split left and right sides
          maxWidth: "1000px", // Set a max width for the entire section
          width: "100%",
        }}
      >
        {/* Left Side - Service Titles */}
        <div className="flex items-center justify-center max-w-xs">


       <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 400,
                  marginTop: "10px",
                  letterSpacing: "-1px",
                }}
              >
                Specialized in <span>Modern Engineering.</span>
              </h2>
        </div>

        {/* Right Side - Content Section */}
        <div
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "700px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Background Ambient Glow */}
          <div
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              filter: "blur(140px)",
              opacity: 0.15,
              transition: "all 0.8s ease",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />

          <div style={{ textAlign: "center" }}>
            {/* Small, Modern Header */}
            <div style={{ marginBottom: "30px", marginTop: "30px" }}>
              <span
                style={{
                  fontSize: "30px",
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  color: "#666",
                  fontWeight: 600,
                }}
              >
                Services Offered
              </span>
       
            </div>

            {/* The Centered Interactive Stack */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  style={{
                    position: "relative",
                    padding: "24px 32px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid",
                    borderColor: "rgba(255,255,255,0.15)",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    transform: "scale(1.02)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                    {/* Dynamic Icon with Gradient Background */}
                    <div
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "12px",
                        background: service.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        color: "#fff",
                        transition: "all 0.3s ease",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                      }}
                    >
                      {service.icon}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          margin: 0,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#555",
                          margin: "4px 0 0 0",
                          maxWidth: "300px",
                          opacity: 1,
                          height: "auto",
                          overflow: "hidden",
                          transition: "all 0.4s ease",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated Arrow */}
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      transform: "translateX(0)",
                      transition: "all 0.3s ease",
                      opacity: 1,
                    }}
                  >
                    →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
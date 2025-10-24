// src/components/ContactInfo.jsx
import React from 'react';

export default function ContactInfo() {
  const contacts = [
    {
      icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
      label: "Email",
      value: "sorcerer@strange.dev",
    },
    {
      icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
      label: "Location",
      value: "Bhopal, India",
    },
  ];

  const socials = [
    {
      platform: "github",
      color: "#181717",
      label: "GitHub",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      platform: "linkedin",
      color: "#0A66C2",
      label: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      platform: "twitter",
      color: "#000000",
      label: "Twitter",
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      platform: "instagram",
      gradient: true,
      label: "Instagram",
      icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Optional: add a toast notification
  };

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-cinzel text-accent text-center [text-shadow:0_0_15px_rgba(255,215,0,0.4)]">
        Mystical Connections
      </h2>

      {/* Contact Info Section */}
      <div className="space-y-4">
        {contacts.map((item, i) => (
          <div
            key={i}
            onClick={() => copyToClipboard(item.value)}
            className="flex items-center gap-6 p-6 bg-mystical-purple/5 backdrop-blur-xl border-2 border-mystical-purple/20 rounded-2xl cursor-pointer transition-all hover:bg-mystical-purple/10 hover:border-mystical-purple hover:translate-x-4 hover:scale-105 hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)]"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-mystical-purple to-mystical-blue rounded-2xl flex items-center justify-center shadow-mystical-purple/30 transition-all hover:scale-110 hover:rotate-6">
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={item.icon} />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-cinzel text-mystical-purple">
                {item.label}
              </h3>
              <p className="text-text-gray">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Socials Section */}
      <div>
        <h3 className="text-xl font-cinzel text-center mb-6 text-text-light">
          Follow the Mystical Journey
        </h3>
        <div className="grid grid-cols-2 gap-6 place-items-center w-full max-w-2xl mx-auto">
          {socials.map((s) => (
            <a
              key={s.platform}
              href="#"
              className="flex flex-col items-center justify-center w-60 h-30 gap-3 p-4 rounded-2xl border-2 transition-all hover:translate-y-[-6px] hover:scale-105 relative overflow-hidden"
              style={{
                background: s.gradient
                  ? "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
                  : s.color,
                borderColor: s.gradient ? "#bc1888" : s.color,
                boxShadow: s.gradient
                  ? "0 10px 30px rgba(188, 24, 136, 0.4)"
                  : `0 10px 30px ${s.color}40`,
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={s.icon} />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

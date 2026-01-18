import React from 'react';

// Icons as components for cleaner usage
const DiscordIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
  </svg>
);

const RobloxIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.339 0L0 18.661l18.661 5.339L24 5.339 5.339 0zm8.794 13.924l-3.522-.943.943-3.522 3.522.943-.943 3.522z"/>
  </svg>
);

const companies = [
  {
    name: "Ryanair LLC",
    description: "The bestrealistic airline group on Roblox and our main company",
    icon: "https://cdn.discordapp.com/attachments/1457768462972616929/1462219302596771901/image.png?ex=696d6558&is=696c13d8&hm=7793eaa299577a419fd4af5f47ae4e81d18ef46feccd26fe8ad9742ebba077f7&",
    color: "bg-blue-600",
    discordUrl: "https://discord.gg/z4RMzBnw",
    robloxUrl: "https://www.roblox.com/communities/32409210/Ryanair-TM#!/about"
  },
  {
    name: "RedJet",
    description: "RedJet is a ferry that runs all routes around the United Kingdom",
    icon: "https://media.discordapp.net/attachments/1457768462972616929/1462218888736411769/White_Teal_Videocentric_Travel_YouTube_Channel_Logo_1.png?ex=696d64f5&is=696c1375&hm=fa9631096db6890ba16e27180430cb1ddb4db9e4e0ff30ff7c7649e427f9005e&=&format=webp&quality=lossless",
    color: "bg-purple-600",
    discordUrl: "#",
    robloxUrl: "#"
  },
  {
    name: "Aether Academy",
    description: "Providing a free education roleplay experience for all",
    icon: "🎓",
    color: "bg-indigo-600",
    discordUrl: "#",
    robloxUrl: "#"
  },
  {
    name: "Aether Labs",
    description: "Providing innovative technology solutions as a tech group",
    icon: "💻",
    color: "bg-cyan-600",
    discordUrl: "#",
    robloxUrl: "#"
  }
];

const Companies = () => {
  return (
    <section id="companies" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Header + Image */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Companies</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Each company in Aether operates independently, driven by unique missions and innovative visions for the future. Explore our companies and discover how they are shaping the future of Roblox roleplay.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-video group">
              <img 
                src="https://picsum.photos/id/1067/2074/1170" 
                alt="Aether Airlines Tail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors flex flex-col">
              
              {/* Card Body */}
              <div className="p-8 flex flex-col items-center text-center flex-grow bg-gradient-to-b from-slate-800/50 to-transparent">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${company.color} text-white overflow-hidden`}>
                  {company.icon.startsWith('http') ? (
                    <img src={company.icon} alt={company.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl">{company.icon}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{company.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Card Footer (Links) */}
              <div className="bg-slate-800/50 p-4 flex justify-center gap-4 border-t border-slate-800/50">
                <a 
                  href={company.discordUrl}
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-[#5865F2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Join Discord"
                >
                  <DiscordIcon />
                </a>
                <a 
                  href={company.robloxUrl}
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-white hover:text-black text-slate-300 flex items-center justify-center transition-all duration-300"
                  aria-label="Visit Roblox Group"
                >
                  <RobloxIcon />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Companies;

import InfoCard from "@/components/ui/card";

export default function Page() {
  const cards = [
    {
      icon: "/images/cards/crm.png",
      title: "CRM",
      description: "Lead capture, pipeline visibility and faster conversions.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "/business/crm",
    },
    {
      icon: "/images/cards/books.png",
      title: "Books",
      description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "/business/books",
    },
    {
      icon: "/images/cards/people.png",
      title: "People",
      description: "HR & Payroll from hire to retire with local labor-law compliance.",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "/business/people",
    },
    {
      icon: "/images/cards/retail.png",
      title: "Retail",
      description: "Modern, device-agnostic POS with 8-hour deployment & e-invoice.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "/business/retail",
    },
    {
      icon: "/images/cards/factory.png",
      title: "Factory",
      description: "Production, inventory, costing & budgeting for manufacturers.",
      color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
      link: "/business/factory",
    },
    {
      icon: "/images/cards/E‑Invoicing.png",
      title: "E‑Invoicing",
      description: "Seamless, compliant connections to tax authorities (incl. PEPPOL & ZATCA).",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "/e-invoicing",
    }
  ];

  return (
    <main className="overflow-x-hidden font-inter">
      <div className="min-h-screen xl:min-h-fit bg-[url('/images/sunset.png')] bg-cover bg-no-repeat bg-fixed bg-center md:bg-fixed lg:bg-local">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_520px] gap-10 lg:gap-12 pt-[95px]">

            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-start">
              <h1 className="text-[30px] md:text-[38px] lg:text-[50px] max-w-full lg:max-w-[685px] font-normal tracking-heading leading-tight">
                Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale
              </h1>
              <p className="font-medium text-fluid-body mt-6 lg:mt-10 tracking-para">
                One Unified Platform. Infinite Possibilities.
              </p>
              <p className="border-t-2 border-[#29266E] w-[60px] mt-6 lg:mt-10"></p>

              <div className="bg-white/50 rounded-[20px] p-6 md:p-8 flex flex-col justify-center text-center mt-6 lg:mt-10 max-w-full md:max-w-[700px] mx-auto md:mx-0">
                <p className="text-black text-fluid-small tracking-para leading-tight text-left font-normal">
                  Experience the future of ERP & E-Invoicing — integrated, intelligent, and incredibly scalable.
                  From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure,
                  cloud-based or on-premise platform.
                </p>
                <h2 className="mt-6 md:mt-8 text-fluid-body lg:text-[24px] font-medium text-black">
                  Simple · Powerful · Designed for Tomorrow.
                </h2>
              </div>

              <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-3 md:gap-4 my-6 md:my-8 lg:mt-10">
                {["Book a Demo", "Get a 30 Day Trial", "Talk to Us"].map((text, i) => (
                  <button
                    key={i}
                    className="w-[280px] sm:w-[180px] md:w-[221px] h-[47px] bg-gradient-to-r from-[#FFFFFF] to-[#C5E1FF] text-[#000000] text-fluid-body lg:text-[18px] xl:text-[20px] tracking-para font-medium rounded-[5px] hover:from-[#C5E1FF] hover:to-[#FFFFFF] transition-all"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden lg:flex flex-col justify-center mb-8 lg:mt-0 gap-4">
              <h1 className="text-fluid-body font-medium">Featured Solutions:</h1>
              {cards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
              <div className="h-[50px] max-w-full md:max-w-[418px] bg-[#D6E0FF] rounded-[5px] mt-3 flex items-center justify-start px-4 md:px-6 cursor-pointer">
                <h3 className="text-[14px]">Explore All Products</h3>
                <div className="flex-shrink-0 ml-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-[#333333]"
                  >
                    <path
                      d="m9 6 6 6-6 6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Featured Solutions */}
          <div className="lg:hidden">
            <div className="max-w-[1440px] mx-auto py-8 flex flex-col gap-4">
              <h1 className="text-fluid-body font-medium">Featured Solutions:</h1>
              {cards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}

              <div className="h-[50px] max-w-full md:max-w-[418px] bg-[#D6E0FF] rounded-[5px] mt-3 flex items-center justify-start px-4 md:px-6 cursor-pointer">
                <h3 className="text-[14px]">Explore All Products</h3>
                <div className="flex-shrink-0 transform transition-transform duration-200 ml-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-[#333333]"
                  >
                    <path
                      d="m9 6 6 6-6 6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

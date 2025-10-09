import Image from "next/image";
import React, { FC } from "react";
import FadeUp from "../../../../components/ui/FadeUp";

interface ImageItem {
  src: string;
  label: string;
}

interface VideoCard {
  title: string;
  src: string;
  width: number;
}

const Sales: FC = () => {
  const images: ImageItem[] = [
    { src: "/images/business/retail/Discount.png", label: "Discount" },
    { src: "/images/business/retail/free.webp", label: "Buy 1 Get 1" },
    { src: "/images/business/retail/flat.webp", label: "Flat Off" },
    { src: "/images/business/retail/voucher.webp", label: "Combo" },
    { src: "/images/business/retail/gift.webp", label: "Free Gift" },
    { src: "/images/business/retail/coupon.webp", label: "Coupon" },
    { src: "/images/business/retail/loyalty.webp", label: "Loyalty" },
    { src: "/images/business/retail/sale.webp", label: "Flash Sale" },
    { src: "/images/business/retail/membership.webp", label: "Membership" },
    { src: "/images/business/retail/cashback.webp", label: "Cashback" },
  ];

  const videoCards: VideoCard[] = [
    { title: "Barcode Scanning", src: "/videos/business/retail/barcode.mp4", width: 500 },
    { title: "Flexible Payments", src: "/videos/business/retail/Flexible Payments.mp4", width: 450 },
    { title: "Product Search by Attributes", src: "/videos/business/retail/productsearch.mp4", width: 550 },
  ];

  return (
     <section className="bg-white text-center px-24px md:px-[32px] mt-48px md:mt-[64px] text-[#333333]">
       <FadeUp>
        <h2 className="text-fluid-h2 font-medium tracking-heading leading-tight mb-[20px]"
        >
          Supercharge Sales with <span className="text-[#C2185B]">Powerful</span>
          <br className="block md:hidden" />
          <span className="text-[#C2185B]"> POS <br className="hidden md:block lg:hidden" /> </span>
          Capabilities
        </h2>
        <p className="text-[#737373] leading-snug mb-[24px] md:mb-[32px] lg:mb-[40px] text-center text-fluid-small tracking-para "
        >
          Empower your front-end team and delight your <br className="md:hidden" />customers <br className="hidden lg:block" /> with <br className="hidden md:block lg:hidden" /> intuitive, high-speed transactions:
        </p>
      </FadeUp>

      <div className="flex flex-col items-center relative">
        {/* MARQUEE CARD */}
        <div className="sticky h-[240px] md:h-[450px] bg-white border border-gray-400 rounded-2xl shadow-xl p-4 max-w-4xl w-full z-10">
          <div className="text-fluid-h3 leading-tight tracking-heading font-bold text-pink-700 text-center mb-5">
            10+ Promotions & Discount Engines
          </div>
          <div className="overflow-hidden w-full">
            <div className="flex gap-10 animate-marquee py-8">
              {images.concat(images).map((img, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[80px] gap-2">
                  <Image src={img.src} width={50} height={80} alt={img.label} />
                  <span className="text-sm font-bold text-gray-600">{img.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VIDEO CARDS */}
        {videoCards.map((card, idx) => (
          <div
            key={idx}
            className="sticky h-[300px] md:h-[450px] mt-24px md:mt-[32px] border border-gray-400 top-10 md:top-20 bg-white rounded-2xl shadow-xl p-6 max-w-4xl w-full"
            style={{ zIndex: 20 + idx }}
          >
            <div className="text-fluid-h3 font-bold text-[#C2185B] text-center mb-5">{card.title}</div>
            <video
              src={card.src}
              muted
              autoPlay
              loop
              playsInline
              className="mx-auto w-full max-w-[500px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* MARQUEE ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Sales;

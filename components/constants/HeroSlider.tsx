import { ReactNode } from "react";

export interface Slides {
  id: number;
  image: string;
  mobileImage: string;
  subTitle: ReactNode;
  title: ReactNode;
  description: ReactNode;
  emergency: string | null;
}

const SLIDES: Slides[] = [
  {
    id: 1,
    image: "/banners/Banner - 1.png",
    mobileImage: "/banners/mobile-1.jpg",
    subTitle: (
      <p className="text-gray-600 text-sm md:text-base font-medium mb-2 tracking-wide font-sans">
        Advanced Cancer Care in the Heart of{" "}
        <span className="text-[#e76f51]">Surat</span>
      </p>
    ),
    title: (
      <>
        India's First <span className="text-[#e76f51]">AI Powered</span>
      </>
    ),
    description: (
      <>
        ETHOS Radiotherapy | Expert Oncologists |{" "}
        <br className="hidden md:block" />
        Compassionate Support
      </>
    ),
    emergency: "24/7 Emergency: 0261-226-5552",
  },
  {
    id: 2,
    image: "/banners/Hero Canner Banner.png",
    mobileImage: "/banners/Mobile Hero Canner Banner.png",
    subTitle: "",
    title: (
      <>
        World-Class <br />
        <span className="text-[#e76f51]">Cancer Technology.</span> <br />
        Right Here in <span className="text-[#e76f51]">Surat.</span>
      </>
    ),
    description: "",
    emergency: "24/7 Emergency: 0261-226-5552",
  },
  {
    id: 3,
    image: "/banners/Hero Bulding Banner.png",
    mobileImage: "/banners/Mobile Hero Bulding Banner.png",
    subTitle: "",
    title: (
      <>
        Complete <span className="text-[#e76f51]">Healthcare.</span> <br />
        One <span className="text-[#e76f51]">Trusted</span> Hospital.
      </>
    ),
    description:
      "From Heart to Ortho, Cancer to Critical Care. Expert Specialists Under One Roof!",
    emergency: null,
  },
];

export { SLIDES };

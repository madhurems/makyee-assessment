import { NavBar } from "./sections/NavBar/NavBar";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { useTranslation } from "react-i18next";
import CommissionSection from "./sections/CommissionSection/CommissionSection";
import DifferencesSection from "./sections/DifferencesSection/DifferencesSection";

export const Main = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full bg-makyeetestframerwebsitewhite-white">
      <div className="px-4_ md:px-0 w-full">
        {/* Sections are ordered according to the layout*/}
        <NavBar />
        <HeroSection />
        <CommissionSection />
        <DifferencesSection />
        <FooterSection />
      </div>

      {/* Chat and Download Buttons */}
      <div className=" hidden md:flex fixed bottom-8 right-8 flex-col  gap-2.5 z-50">
        <div className="w-[150px] h-[50px] bg-white rounded-xl shadow-[0px_1px_8px_#00000040] flex items-center">
          <div className="w-[30px] h-[30px] ml-2.5">
            <img
              className="w-full h-full"
              alt="Download icon"
              src="/svg453347154-950.svg"
            />
          </div>
          <div className="ml-2 mt-2.5">
            <div className="font-bold text-black text-xs tracking-[-0.24px] leading-[.25rem] ml-3.5">
              {t("buttons.download")}
            </div>
            <div className="font-bold mt-[2px]">
              <span className="text-[#ea223c] ">MAKYEE </span>
              <span className="text-black text-xs">app</span>
            </div>
          </div>
        </div>

        <div className="w-[150px] h-[42px] bg-white rounded-lg shadow-[0px_1px_8px_#00000040] flex items-center justify-center gap-2.5 pl-[13px] pr-[13.02px] py-1.5">
          <div className="relative self-stretch w-[30px]">
            <img
              className="w-full h-full"
              alt="Chat icon"
              src="/whatsapp.svg"
            />
          </div>
          <span className="font-medium text-black text-sm tracking-[-0.28px]">
            {t("buttons.chatWithUs")}
          </span>
        </div>
      </div>
    </div>
  );
};

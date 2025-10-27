import { useEffect, useState } from "react";
import knpLogo from "@/assets/knp-logo.png";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="fade-in">
        <img
          src={knpLogo}
          alt="KNP Consultants"
          className="w-48 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Preloader;

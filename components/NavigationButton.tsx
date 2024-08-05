import Image from "next/image";
import React from "react";

type NavigationButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  const positionClass = direction === "left" ? "left-0" : "right-0";

  return (
    <button
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-transparent text-white cursor-pointer transition-colors duration-300 `}
      onClick={onClick}
    >
      {direction === "left" ? (
        <Image src={"/prev.png"} alt="PREV" width={100} height={150} />
      ) : (
        <Image src={"/next.png"} alt="NEXT" width={100} height={150} />
      )}
    </button>
  );
};

export default NavigationButton;

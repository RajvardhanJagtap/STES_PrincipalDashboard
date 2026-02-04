import React from "react";
import Image from "next/image";
import { AvatarProps } from "@/types";

const Avatar: React.FC<AvatarProps> = ({
  name,
  initials,
  src,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const sizePixels = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const getInitials = (displayName: string): string => {
    return displayName
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const displayInitials = (initials || "").trim()
    ? initials.trim().toUpperCase().slice(0, 2)
    : getInitials(name);

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-full
        text-white
        flex
        items-center
        justify-center
        font-semibold
        overflow-hidden
        transition-transform
        hover:scale-105
        ${className}
      `}
      style={{ backgroundColor: "#026892" }}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          width={sizePixels[size]}
          height={sizePixels[size]}
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{displayInitials}</span>
      )}
    </div>
  );
};

export default Avatar;

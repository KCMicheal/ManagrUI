import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const baseStyle = "px-4 py-2 rounded shadow-md focus:outline-none";
  const variantStyle =
    variant === "primary"
      ? "bg-primary text-white hover:bg-blue-700"
      : "bg-secondary text-white hover:bg-red-700";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;

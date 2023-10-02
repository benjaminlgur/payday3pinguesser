import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick: Function;
  className?: string;
}

const Button = ({ children, color = "primary", className, onClick }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${color} ${className}`}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;

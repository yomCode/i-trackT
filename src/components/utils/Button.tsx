import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Button = ({
  children,
  backgroundColor,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      style={{
        color: "white",
        backgroundColor: backgroundColor ? backgroundColor : "black",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        fontSize: "13px",
      }}
      className={!disabled ? "btn" : "btn-disabled"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

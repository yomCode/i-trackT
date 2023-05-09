import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = ({ children, backgroundColor, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      style={{
        color: "white",
        backgroundColor: backgroundColor ? backgroundColor : "black",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1.8rem",
      }}
      className="btn"
    >
      {children}
    </button>
  );
};

export default Button;

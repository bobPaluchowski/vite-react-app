import React from "react";

interface Props {
  children: string;
  color?: string;
  // color?: 'primary' | 'secondary' | 'danger' -> to specify allowed values
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    // onClick is gonna be implemented and passed from the outside
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

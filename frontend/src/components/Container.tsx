import React from "react";

interface ContainerProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

function Container({ className, children }: ContainerProps) {
  return (
    <div className={`max-w-screen-2xl mx-auto px-10 ${className}`}>
      {children}
    </div>
  );
}

export default Container;

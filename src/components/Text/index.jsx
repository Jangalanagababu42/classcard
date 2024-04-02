import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  s: "text-base font-medium",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

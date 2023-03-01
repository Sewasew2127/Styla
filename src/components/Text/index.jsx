import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h2: "sm:text-[18px] md:text-[20px] text-[22px]",
  h3: "font-bold text-[18px]",
  h4: "text-[16px]",
  h5: "text-[14px]",
  h6: "text-[12.78px]",
  body1: "text-[12.25px]",
  body2: "text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

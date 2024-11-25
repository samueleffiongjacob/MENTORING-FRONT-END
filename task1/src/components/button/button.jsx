import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/button.css"

const CustomButton = ({ children, onClick, variant, className, ...props }) => {
  const buttonClass = `custom-button ${variant} ${className || ""}`.trim();

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired, // Content inside the button
  onClick: PropTypes.func, // Click event handler
  variant: PropTypes.oneOf(["primary", "secondary", "link-style"]), // Button styles
  className: PropTypes.string, // Additional custom classes
};

CustomButton.defaultProps = {
  onClick: () => {},
  variant: "primary",
  className: "",
};

export default CustomButton;

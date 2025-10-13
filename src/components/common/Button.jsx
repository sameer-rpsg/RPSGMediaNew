import React from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <>
      <span className="btn__inner">
        <span className="btn__content">
          <span className="btn__text">{children}</span>
        </span>
        <span className="btn__content" aria-hidden="true" data-nosnippet="">
          <span className="btn__text">{children}</span>
        </span>
      </span>
    </>
  );
};

export default Button;

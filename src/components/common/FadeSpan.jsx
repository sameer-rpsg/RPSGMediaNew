import React from 'react'

 const FadeSpan = ({ children, delay = 0 }) => (
  <span
    data-aos="fade"
    data-aos-offset="0"
    data-aos-duration="300"
    data-aos-easing="ease-in-out-sine"
    data-aos-delay={delay}
    data-aos-once="false"
  >
    {children}
  </span>
);

export default FadeSpan;
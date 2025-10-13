import Link from "next/link";
import React from "react";

const BottomLineAnimation = ({animatedText,herfUrl}) => {
  return (
    <span className="bottomUnderlineAnimation">
    <Link href={"herfUrl"} target="_self" rel="noopener noreferrer">
    {animatedText}
    </Link>
    </span>
  );
};

export default BottomLineAnimation;

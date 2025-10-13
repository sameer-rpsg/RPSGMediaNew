import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const TextAnimate = ({textAnim,hreff}) => {
  return (
    <Link target="_blank"
      href={"hreff"}
      className="b-arrow underlined link-active-full-small"
      rel="noopener noreferrer"
      aria-label=""
    >
      <span className="icon icon-b">
        <GoArrowUpRight />
      </span>
      <span className="content_more">{textAnim}</span>
      <span className="icon icon-a">
        <GoArrowUpRight />
      </span>
    </Link>
  );
};

export default TextAnimate;

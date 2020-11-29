import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
Img.propTypes = {
  src: PropTypes.string.isRequired,
};
export default function Img({ src, style, width = 30, height = 30 }) {
  return (
    <div style={{ display: "inline-block", marginRight: 8 }}>
      <Image
        style={{ ...style }}
        src={src}
        alt="Picture"
        width={width}
        height={height}
      />
    </div>
  );
}

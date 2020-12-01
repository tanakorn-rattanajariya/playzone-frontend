import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
Img.propTypes = {
  src: PropTypes.string.isRequired,
};
export default function Img({ src, style, width, height, layout = "fill" }) {
  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        marginRight: 8,
        ...style,
      }}
    >
      <Image
        src={src}
        alt="Picture"
        width={width}
        height={height}
        layout={layout}
      />
    </div>
  );
}

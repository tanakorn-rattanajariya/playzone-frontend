import React from "react";
import Image from 'next/image'
import PropTypes from "prop-types";
Img.propTypes = {
  src: PropTypes.String.isRequired,
};
export default function Img({ src }) {
  return <Image src={src} alt="Picture" width={36} height={36} />;
}

import React from "react";
import NextImage, { ImageProps } from "next/image";

const Image = ({
  src,
  alt,
  layout = "responsive",
  width = 100, // prop for layout != fill
  height = 100, // prop for layout != fill
  objectFit = "cover", // prop for layout == fill
  sizes = "100vw", // prop for layout == fill
  unoptimized = false,
  ...props
}: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={layout != "fill" ? width : undefined}
      height={layout != "fill" ? height : undefined}
      sizes={layout == "fill" && !unoptimized ? sizes : undefined}
      layout={layout}
      objectFit={layout == "fill" ? objectFit : undefined}
      unoptimized={unoptimized}
      {...props}
    />
  );
};

export default Image;

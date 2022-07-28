import getImageUrl from "../../../utils/getImageUrl";

// Next
import Image from "next/image";

interface ImageI {
  src: string;
  alt?: string;
  height: string | number;
  width: string | number;
}

const ImageContainer = ({ src, height, width, alt }: ImageI) => {
  return (
    <Image
      src={getImageUrl(src, true)}
      alt={alt || "image"}
      height={height}
      width={width}
    />
  );
};

export default ImageContainer;

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  alt: string;
  src: string;
  width: number;
  height: number;
  className: string;
  placeholder?: string;
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  alt,
  src,
  width,
  height,
  className,
  fallbackSrc,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Image
        alt={alt}
        src={fallbackSrc}
        width={width}
        height={height}
        className={`${className} absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
      />
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        className={`${className} absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } object-cover`}
        placeholder='empty'
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};

export default ImageWithFallback;

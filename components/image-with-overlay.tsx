import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {
  className: string;
  overlayText: string;
}
export default function ImageWithOverlay({
  className,
  overlayText,
  height,
  width,
  src,
  alt,
}: ImageProps) {
  return (
    <div className="relative h-full w-full">
      <NextImage src={src} alt={alt} height={height} width={width} />
      <div className="absolute inset-0 shadow-3xl">{overlayText}</div>
    </div>
  );
}

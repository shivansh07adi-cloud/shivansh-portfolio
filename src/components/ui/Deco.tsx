// Painted decoration (pre-rendered image) placed in the margins of a section.
export default function Deco({ src, className = '', alt = '' }: { src: string; className?: string; alt?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`hidden lg:block absolute pointer-events-none select-none ${className}`}
    />
  );
}

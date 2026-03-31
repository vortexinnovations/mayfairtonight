import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  height?: string;
  overlay?: string;
  priority?: boolean;
}

export default function HeroImage({
  src,
  alt,
  children,
  height = "h-[50vh] min-h-[340px]",
  overlay = "bg-gradient-to-t from-black via-black/70 to-black/40",
  priority = true,
}: HeroImageProps) {
  return (
    <section className={`relative ${height} flex items-end`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-8">
        {children}
      </div>
    </section>
  );
}

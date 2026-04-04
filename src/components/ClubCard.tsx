import Link from "next/link";
import Image from "next/image";
import WhatsAppCTA from "./WhatsAppCTA";

interface ClubCardProps {
  slug: string;
  name: string;
  tagline: string;
  musicPolicy: string[];
  openingTime: string;
  area: string;
  tableMinimum: string;
  imageSrc?: string;
  eventName?: string;
  eventDescription?: string;
  specialGuest?: string;
  compact?: boolean;
}

export default function ClubCard({
  slug,
  name,
  tagline,
  musicPolicy,
  openingTime,
  area,
  tableMinimum,
  imageSrc,
  eventName,
  eventDescription,
  specialGuest,
  compact = false,
}: ClubCardProps) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-gold/30 transition-colors">
      <div className="flex gap-4">
        {imageSrc && (
          <Link href={`/clubs/${slug}`} className="shrink-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={`${name} nightclub`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="96px"
              />
            </div>
          </Link>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1 min-w-0">
              <Link href={`/clubs/${slug}`}>
                <h3 className="text-lg font-semibold text-white hover:text-gold transition-colors">
                  {name}
                </h3>
              </Link>
              {eventName && (
                <p className="text-gold text-sm font-medium mt-0.5">{eventName}</p>
              )}
              <p className="text-dark-muted text-sm mt-1">
                {eventDescription || tagline}
              </p>
              {specialGuest && (
                <p className="text-gold-light text-sm mt-1">* {specialGuest}</p>
              )}
            </div>
            {!compact && (
              <div className="sm:text-right shrink-0">
                <WhatsAppCTA variant="club" clubName={name} size="sm" />
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
            <span className="bg-dark px-2.5 py-1 rounded text-gray-300 border border-dark-border">
              {musicPolicy.join(" · ")}
            </span>
            <span className="text-dark-muted">Opens {openingTime}</span>
            <span className="text-dark-muted">{area}</span>
            <span className="text-gold">Tables from {tableMinimum}</span>
          </div>

          {compact && (
            <div className="mt-3 flex items-center gap-3">
              <Link
                href={`/clubs/${slug}`}
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                More info →
              </Link>
              <WhatsAppCTA variant="club" clubName={name} size="sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

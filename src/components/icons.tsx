type IconProps = { className?: string };

export function IconLandArea({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M8 34 18 14l10 12 4-6 8 14H8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 38h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBuiltUpArea({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M10 38V16l14-8 14 8v22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M18 38V26h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 20h8M20 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBuildingLayout({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="10" y="8" width="28" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="20" width="28" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="32" width="28" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconOperational({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m16 24 5.5 5.5L32 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

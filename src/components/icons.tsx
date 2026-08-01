type IconProps = { className?: string };

export function IconEngineering({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M8 36V12h8l4 8 4-8h8v24h-8V24l-4 8-4-8v12H8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M32 36h8V20l-4-8-4 8v16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconConstruction({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M10 38h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 38V18l10-8 10 8v20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M22 38V28h4v10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 22h8M20 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconSustainable({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 8c0 12-8 18-16 18 0-12 8-18 16-18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 8c0 12 8 18 16 18 0-12-8-18-16-18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M24 26v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 36h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconConsulting({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 38c2.5-7 8-10 12-10s9.5 3 12 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M34 14h6M37 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

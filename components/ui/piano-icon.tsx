export function PianoIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.4 3.4c-1.3-.6-2.6-.9-4-.9-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-1.1-.2-2.2-.5-3.2" />
      <path d="M13.1 13.8L15 12" />
      <path d="m16 9-4.7 4.7" />
      <path d="M22 2 2 22" />
    </svg>
  );
}

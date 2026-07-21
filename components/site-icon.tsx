type IconName = "arrow" | "check" | "download" | "location" | "phone" | "whatsapp" | "document" | "tool" | "gauge";

export function SiteIcon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

  if (name === "arrow") return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  if (name === "check") return <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>;
  if (name === "download") return <svg {...common}><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg>;
  if (name === "location") return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (name === "phone") return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" /></svg>;
  if (name === "whatsapp") return (
    <svg {...common} viewBox="0 0 24 24">
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4l-4.4 1.3 1.4-4.2a8.5 8.5 0 1 1 15.6-4.5Z" />
      <path fill="currentColor" stroke="none" d="M8.1 7.1c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.9 2.1c.1.3.1.5-.1.7l-.7.9c-.2.2-.1.4 0 .6.7 1.2 1.7 2.1 2.9 2.7.2.1.4.1.6-.1l.9-1.1c.2-.2.4-.3.7-.2l2.1 1c.3.1.4.3.4.6 0 .5-.3 1.4-1 2-.7.6-1.5.8-2.4.6-1.2-.2-2.7-.7-4.4-2.2-2.1-1.8-3.3-4-3.5-5.3-.1-.8.2-1.6.8-2.2Z" />
    </svg>
  );
  if (name === "tool") return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M9 12v3h6v-3" /></svg>;
  if (name === "gauge") return <svg {...common}><circle cx="12" cy="10" r="7" /><path d="m12 10 3.5-3.5M7 10H5m14 0h-2M12 5V3M9 17v4h6v-4" /><circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" /></svg>;
  return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>;
}

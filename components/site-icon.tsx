type IconName = "arrow" | "check" | "download" | "location" | "phone" | "whatsapp" | "document" | "tool" | "gauge";

export function SiteIcon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

  if (name === "arrow") return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  if (name === "check") return <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>;
  if (name === "download") return <svg {...common}><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg>;
  if (name === "location") return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (name === "phone") return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" /></svg>;
  if (name === "whatsapp") return <svg {...common}><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.5Z" /><path d="M8.4 7.8c.7 3.1 2.4 4.8 5.7 6l1.5-1.1 2.2.9c-.1 1.8-1.5 2.7-3.1 2.5-4.5-.7-7.3-3.4-8-7.8-.2-1.7.7-3.1 2.4-3.2l1 2.2-1.7.5Z" /></svg>;
  if (name === "tool") return <svg {...common}><path d="m14.7 6.3 3-3a4 4 0 0 1-5 5L5 16l-2 5 5-2 7.7-7.7a4 4 0 0 1 5-5l-3 3" /></svg>;
  if (name === "gauge") return <svg {...common}><path d="M4 18a8 8 0 1 1 16 0M12 14l4-4M7 18h10" /></svg>;
  return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>;
}

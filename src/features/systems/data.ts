export type System = {
  slug: string;
  code: string;
  title: string;
  domain: string;
  owner: string;
  capabilities: string[];
  interface: string;
  summary: string;
};

export const systems: System[] = [
  {
    slug: "software-command",
    code: "SYS-SW",
    title: "SOFTWARE COMMAND",
    domain: "FULL-STACK / WEB SYSTEMS",
    owner: "KOGLESH",
    capabilities: ["NEXT.JS", "TYPESCRIPT", "SUPABASE", "POSTGRESQL", "VERCEL"],
    interface: "COMMAND SURFACE",
    summary: "Application architecture, interfaces, data flows, deployment, and system observability.",
  },
  {
    slug: "hardware-intelligence",
    code: "SYS-HW",
    title: "HARDWARE + INTELLIGENCE",
    domain: "EMBEDDED / AI / COMPUTER VISION",
    owner: "YENNAMUTAN",
    capabilities: ["PYTHON", "TENSORFLOW", "OPENCV", "ARDUINO", "ESP32"],
    interface: "PHYSICAL EDGE",
    summary: "Embedded systems, sensing, computer vision, and edge intelligence that connect physical reality to software.",
  },
];

export function getSystem(slug: string) {
  return systems.find((system) => system.slug === slug);
}

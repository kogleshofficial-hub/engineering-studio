export type LabStatus = "CONCEPT" | "ACTIVE" | "ARCHIVED";

export type Lab = {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  stack: string[];
  status: LabStatus;
  metricLabel: string;
  metricValue: string;
  summary: string;
  problem: string;
  approach: string;
  outputs: string[];
  owner: string;
};

export const labs: Lab[] = [
  {
    slug: "connected-sensor-fabric",
    code: "LAB-001",
    title: "CONNECTED SENSOR FABRIC",
    subtitle: "Distributed sensing → edge processing → cloud telemetry",
    stack: ["ESP32", "IoT", "POSTGRES", "NEXT.JS"],
    status: "CONCEPT",
    metricLabel: "TARGET PIPELINE LATENCY",
    metricValue: "< 100ms",
    summary: "A modular sensor-to-dashboard architecture designed to turn physical signals into observable system state.",
    problem: "Raw sensor readings are useful only when they can be transported, validated, stored, and surfaced with clear system context.",
    approach: "Separate acquisition, transport, persistence, and presentation so hardware experiments can evolve without rewriting the interface layer.",
    outputs: ["Sensor contract", "Telemetry ingestion path", "Historical data model", "Live operations surface"],
    owner: "KOGLESH + YENNAMUTAN",
  },
  {
    slug: "edge-vision-node",
    code: "LAB-002",
    title: "EDGE VISION NODE",
    subtitle: "Computer vision inference at the physical edge",
    stack: ["PYTHON", "OPENCV", "TENSORFLOW", "ESP32/CAM"],
    status: "CONCEPT",
    metricLabel: "TARGET INFERENCE",
    metricValue: "REAL-TIME",
    summary: "An edge-compute pattern for processing visual signals close to the device instead of shipping every frame upstream.",
    problem: "Vision systems become expensive and fragile when every observation depends on a remote processing loop.",
    approach: "Keep acquisition and first-pass inference close to the camera, then transmit only meaningful events and compact telemetry.",
    outputs: ["Inference contract", "Event schema", "Confidence telemetry", "Remote monitoring surface"],
    owner: "YENNAMUTAN",
  },
  {
    slug: "autonomous-data-surface",
    code: "LAB-003",
    title: "AUTONOMOUS DATA SURFACE",
    subtitle: "A command interface for live engineering telemetry",
    stack: ["NEXT.JS", "TYPESCRIPT", "API", "UI SYSTEM"],
    status: "ACTIVE",
    metricLabel: "DESIGN TARGET",
    metricValue: "OBSERVABLE",
    summary: "A dense operations interface that turns system state into readable signals, decisions, and engineering history.",
    problem: "A collection of disconnected tools makes it difficult to understand the health of a system as a whole.",
    approach: "Use a consistent information hierarchy, explicit states, and modular data contracts so every system can plug into one command surface.",
    outputs: ["Status model", "Telemetry cards", "Failure states", "System navigation"],
    owner: "KOGLESH",
  },
];

export function getLab(slug: string) {
  return labs.find((lab) => lab.slug === slug);
}

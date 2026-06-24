export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mavene consistently demonstrates exceptional technical depth and the ability to translate complex requirements into clean, scalable frontend architectures. His drive to deliver quality and his collaborative spirit make him an invaluable asset to any engineering team.",
    name: "Collins Kipchumba",
    title: "Software Engineer, Safaricom PLC",
  },
  {
    quote:
      "Working with Mavene on the IoT SIM Connectivity Portal was a standout experience. He owns problems end-to-end, drives architectural decisions with confidence, and never loses sight of the user experience or the business goal.",
    name: "Silas Magare",
    title: "Line Manager, Safaricom PLC",
  },
  {
    quote:
      "Mavene brings a rare combination of frontend precision and DevOps mindset — he understands the full delivery lifecycle, raises the bar on code quality, and has a genuine passion for building things that scale.",
    name: "Elvis Okeda",
    title: "IoT DevOps Engineer, Safaricom PLC",
  },
];

export const techStack = [
  { id: 1, name: "Next.js", img: "/next.svg" },
  { id: 2, name: "React", img: "/re.svg" },
  { id: 3, name: "TypeScript", img: "/ts.svg" },
  { id: 4, name: "Tailwind CSS", img: "/tail.svg" },
  { id: 5, name: "Three.js", img: "/three.svg" },
  { id: 6, name: "Framer Motion", img: "/fm.svg" },
];

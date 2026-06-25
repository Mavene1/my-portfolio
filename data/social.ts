export interface SocialLink {
  id: number;
  name: string;
  img: string;
  link: string;
}

export const socialMedia: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    img: "/icons/git.svg",
    link: "https://github.com/MaveneOmondi",
  },
  {
    id: 2,
    name: "X / Twitter",
    img: "/icons/twit.svg",
    link: "https://twitter.com/MaveneOmondi",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/icons/link.svg",
    link: "https://linkedin.com/in/mavene-omondi",
  },
];

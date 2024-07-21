export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfolio Sami Bououdine",
  description: "Développeur Fullstack",
  navItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "À propos",
      href: "#about",
    },
    {
      label: "Technologies",
      href: "#technos",
    },
    {
      label: "Projets",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};

export const iconSlugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "mongodb",
  "springboot",
  "intellijidea",
];

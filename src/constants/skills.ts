export interface Image {
  src: string;
  altText: string;
}

export interface Skill {
  name: string;
  image: Image;
}

interface Skills {
  languages: Skill[];
  frameworks: Skill[];
  testing: Skill[];
  tools: Skill[];
}

export const SKILLS: Skills = {
  languages: [
    {
      name: "JavaScript",
      image: {
        src: "js-icon.svg",
        altText: "skills.logoText.js",
      },
    },
    {
      name: "TypeScript",
      image: {
        src: "ts-icon.svg",
        altText: "skills.logoText.ts",
      },
    },
    {
      name: "HTML5",
      image: {
        src: "html5-icon.svg",
        altText: "skills.logoText.html",
      },
    },
    {
      name: "CSS3",
      image: {
        src: "css3-icon.svg",
        altText: "skills.logoText.css",
      },
    },
    {
      name: "Python",
      image: {
        src: "python-icon.svg",
        altText: "skills.logoText.python",
      },
    },
  ],
  frameworks: [
    {
      name: "React.js",
      image: {
        src: "react-icon.svg",
        altText: "skills.logoText.react",
      },
    },
    {
      name: "Next.js",
      image: {
        src: "nextJs-icon.svg",
        altText: "skills.logoText.nextJs",
      },
    },
    {
      name: "Tailwind CSS",
      image: {
        src: "tailwind-icon.svg",
        altText: "skills.logoText.tailwind",
      },
    },
  ],
  testing: [
    {
      name: "Jest",
      image: {
        src: "jest-icon.svg",
        altText: "skills.logoText.jest",
      },
    },
    {
      name: "Selenium",
      image: {
        src: "selenium-icon.svg",
        altText: "skills.logoText.selenium",
      },
    },
    {
      name: "Playwright",
      image: {
        src: "playwright-icon.svg",
        altText: "skills.logoText.playwright",
      },
    },
    {
      name: "Cypress",
      image: {
        src: "cypress-icon.svg",
        altText: "skills.logoText.cypress",
      },
    },
    {
      name: "Sauce Labs",
      image: {
        src: "saucelabs-icon.svg",
        altText: "skills.logoText.saucelabs",
      },
    },
  ],
  tools: [
    {
      name: "Snyk",
      image: {
        src: "snyk-icon.svg",
        altText: "skills.logoText.snyk",
      },
    },
    {
      name: "Datadog",
      image: {
        src: "/datadog-icon.svg",
        altText: "skills.logoText.datadog",
      },
    },

    {
      name: "Kiro IDE",
      image: {
        src: "/kiro-icon.svg",
        altText: "skills.logoText.kiro",
      },
    },
    {
      name: "Git",
      image: {
        src: "/git-icon.svg",
        altText: "skills.logoText.git",
      },
    },
    {
      name: "AWS",
      image: {
        src: "/aws-icon.svg",
        altText: "skills.logoText.aws",
      },
    },
  ],
};

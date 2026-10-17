type SkillsBlock = {
  name: string;
  iconClass: string;
  skills: Skill[];
};

type Skill = {
  img: string;
  name: string;
};

const backendSkills: SkillsBlock = {
  name: "Backend",
  iconClass: "fa-solid fa-server",
  skills: [
    {
      img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      name: "Node.js",
    },
    {
      img: "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000",
      name: "Express.js",
    },
    {
      img: "https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000",
      name: "Prisma ORM",
    },
    {
      img: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      name: "PostgreSQL",
    },
    {
      img: "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000",
      name: "JWT",
    },
  ],
};

const frontendSkills: SkillsBlock = {
  name: "Frontend",
  iconClass: "fa-solid fa-desktop",
  skills: [
    {
      img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      name: "HTML",
    },
    {
      img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      name: "CSS",
    },
    {
      img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      name: "JavaScript",
    },
    {
      img: "https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000",
      name: "TypeScript",
    },
    {
      img: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
      name: "React",
    },
  ],
};

const tools: SkillsBlock = {
  name: "Tools",
  iconClass: "fa-solid fa-screwdriver-wrench",
  skills: [
    {
      img: "https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000",
      name: "SCSS",
    },
    {
      img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      name: "Git",
    },
    {
      img: "https://img.icons8.com/?size=100&id=HF4xGsjDERHf&format=png&color=000000",
      name: "Linux",
    },
    {
      img: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
      name: "Figma",
    },
  ],
};

export const techStack = [backendSkills, frontendSkills, tools];

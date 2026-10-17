import Section from "../../../components/Section.tsx";
import styles from "../../../../styles/sections/TechStack.module.css";
import { techStack } from "../../../../data/skills-data.ts";

function TechStack() {
  return (
    <Section labeledBy="tech-stack-label" card={true} id="skills">
      <h2 id="tech-stack-label" className={`section-title animate`}>
        Tech stack
      </h2>
      <div className={`${styles["skills__grid"]} animate`}>
        {techStack.map((block) => (
          <article className={styles["skills-card"]} key={block.name}>
            <header className={styles["skills-card__header"]}>
              <div className={styles["skills-card__icon"]}>
                <i className={block.iconClass} aria-hidden="true"></i>
              </div>
              <h3 className={styles["skills-card__title"]}>{block.name}</h3>
            </header>
            <ul className={styles["skills-card__list"]}>
              {block.skills.map((skill) => (
                <li className={styles["skills-card__item"]} key={skill.name}>
                  <img src={skill.img} alt={`${skill.name} logo`} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default TechStack;

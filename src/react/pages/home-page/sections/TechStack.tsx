import Section from "../../../components/Section.tsx";
import styles from "../../../../styles/sections/TechStack.module.css";

function TechStack() {
  return (
    <Section labeledBy="tech-stack-label" card={true}>
      <h2
        id="tech-stack-label"
        className={`section-title ${styles["skills__title"]}`}
      >
        Tech stack
      </h2>
      <div className={styles["skills__grid"]}>
        <article className={styles["skills-card"]}>
          <header className={styles["skills-card__header"]}>
            <div className={styles["skills-card__icon"]}>
              <i className="fa-solid fa-server" aria-hidden="true"></i>
            </div>
            <h3 className={styles["skills-card__title"]}>Backend</h3>
          </header>
          <ul className={styles["skills-card__list"]}>
            <li className={styles["skills-card__item"]}>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                alt="node-js"
              />
              Node.js
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000"
                alt="Express.js logo"
              />
              Express.js
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000"
                alt="Prisma ORM logo"
              />
              Prisma ORM
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
                alt="PostgreSQL logo"
              />
              PostgreSQL
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000"
                alt="JsonWebToken logo"
              />
              JWT
            </li>
          </ul>
        </article>

        <article className={styles["skills-card"]}>
          <header className={styles["skills-card__header"]}>
            <div className={styles["skills-card__icon"]}>
              <i className="fa-solid fa-desktop" aria-hidden="true"></i>
            </div>
            <h3 className={styles["skills-card__title"]}>Frontend</h3>
          </header>
          <ul className={styles["skills-card__list"]}>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                alt="HTML5 logo"
              />
              HTML5
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                alt="CSS3 logo"
              />
              CSS3
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                alt="JavaScript logo"
              />
              JavaScript
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
                alt="React logo"
              />
              React
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000"
                alt="SASS logog"
              />
              SASS
            </li>
          </ul>
        </article>

        <article className={styles["skills-card"]}>
          <header className={styles["skills-card__header"]}>
            <div className={styles["skills-card__icon"]}>
              <i
                className="fa-solid fa-screwdriver-wrench"
                aria-hidden="true"
              ></i>
            </div>
            <h3 className={styles["skills-card__title"]}>Tools</h3>
          </header>
          <ul className={styles["skills-card__list"]}>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                alt="Git logo"
              />
              Git
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=HF4xGsjDERHf&format=png&color=000000"
                alt="Linux logo"
              />
              Linux
            </li>
            <li className={styles["skills-card__item"]}>
              <img
                src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
                alt="Figma logo"
              />
              Figma
            </li>
          </ul>
        </article>
      </div>
    </Section>
  );
}

export default TechStack;

import Section from "../../../components/Section.tsx";
import styles from "../../../../styles/sections/Hero.module.css";

function Hero() {
  return (
    <Section labeledBy="hero-label">
      <div className={styles["hero__block"]}>
        <img
          src="../public/images/avatarPlaceholder.png"
          alt="Avatar"
          className={`github-avatar ${styles["hero__avatar"]}`}
        />
        <div className={styles["hero__body"]}>
          <h1 id="hero-label" className={styles["hero__title"]}>
            Hi! I'm Artem!
          </h1>
          <p className={styles["hero__descriptor"]}>
            Self-taught Full Stack Developer with a solid foundation built
            through The Odin Project. I enjoy building web apps from scratch,
            working on interestings projects and and continuous learning!
          </p>
          <ul className={styles["hero__actions"]}>
            <li>
              <a href="#contact" className="btn btn--secondary">
                Contact me
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#projects" className="btn btn--primary">
                Explore projects
                <i
                  className="fa-solid fa-share-from-square"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Hero;

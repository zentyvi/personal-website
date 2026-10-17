import styles from "../../styles/components/SiteHeader.module.css";
import GithubAvatar from "./GithubAvatar.tsx";

function SiteHeader() {
  return (
    <nav className={styles["navigation"]}>
      <ul className={styles["navigation__list"]}>
        <li>
          <a href="#about" className={styles["navigation__link"]}>
            <i className="fa-solid fa-mug-hot" aria-hidden="true"></i>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={styles["navigation__link"]}>
            <i className="fa-solid fa-code" aria-hidden="true"></i>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={styles["navigation__link"]}>
            <i className="fa-solid fa-address-book" aria-hidden="true"></i>
            Contact
          </a>
        </li>
      </ul>

      <a
        href="https://github.com/zentyvi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github profile"
        className={styles["navigation__avatar-wrapper"]}
      >
        <GithubAvatar
          className={`github-avatar ${styles["navigation__avatar"]}`}
        />
      </a>
    </nav>
  );
}

export default SiteHeader;

import styles from "../../styles/components/SiteFooter.module.css";

function SiteFooter() {
  return (
    <footer className={`section card ${styles["contact"]}`} id="contact">
      <div className="container animate">
        <h2 className={`section-title`}>Contact me</h2>
        <div className={`${styles["contact__block"]}`}>
          <ul className={styles["contact__list"]}>
            <li>
              <a
                href="https://github.com/zentyvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                Github
              </a>
            </li>

            <li>
              <a
                href="mailto:zentyvi1111@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-at" aria-hidden="true"></i>
                Email
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/artem-kraev-aa0a69439"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                Linkedin
              </a>
            </li>

            <li>
              <a
                href="https://t.me/zentyvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-telegram" aria-hidden="true"></i>
                Telegram
              </a>
            </li>
          </ul>
          <span>Ardeoani, Bacău, Romania</span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;

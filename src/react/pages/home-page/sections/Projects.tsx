import { projects } from "../../../../data/projects-data.ts";
import { useImagesViewer } from "../../../contexts/ImageViewerProvider.tsx";
import Section from "../../../components/Section.tsx";
import styles from "../../../../styles/sections/Projects.module.css";

function Projects() {
  const { openImagesViewer } = useImagesViewer();

  const handleImageClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    const element = e.target as HTMLButtonElement;
    const projectPrefix = e.currentTarget.getAttribute("data-project");
    const id = element.dataset["id"];
    const project = projects.find((p) => p.prefix === projectPrefix);
    if (!project) {
      throw new Error(`Project not found: [${projectPrefix}]`);
    }

    openImagesViewer(project.images_high_resolution, Number(id) || 0);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(0.95)`;
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "none";
  };

  const projectCards: Array<React.ReactNode> = projects.map((project) => (
    <article
      className={styles["project-card"]}
      key={project.prefix}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label="Open images"
        title="Project's pictures"
        className={styles["project-card__images-grid"]}
        data-project={project.prefix}
        onClick={handleImageClick}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            handleImageClick(e);
          }
        }}
      >
        {project.images_preview.map((url, index) => (
          <div className={styles["project-card__image-wrapper"]} key={url}>
            <img
              className={styles["project-card__image"]}
              data-id={index}
              src={url}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className={styles["project-card__body"]}>
        <div className={styles["project-card__meta"]}>
          <header className={styles["project-card__header"]}>
            <h3 className={styles["project-card__title"]}>{project.title}</h3>
          </header>
          <div className={styles["project-card__desc"]}>
            <p className={styles["project-card__descriptor"]}>
              {project.description}
            </p>
          </div>
        </div>
        <div className={styles["project-card__actions"]}>
          <ul className={styles["project-card__actions-list"]}>
            <li>
              <a
                href={project.github}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                Github
              </a>
            </li>
            <li>
              <a
                href={project.preview}
                className="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-eye" aria-hidden="true"></i>
                Preview
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  ));

  return (
    <Section labeledBy="projects-label">
      <h2
        id="projects-label"
        className={`section-title ${styles["projects__title"]}`}
      >
        Projects
      </h2>
      <div className={styles["projects-container"]}>
        {projectCards}
        <article
          className={`${styles["project-card"]} ${styles["project-placeholder"]}`}
        >
          <div className={styles["project-placeholder__content"]}>
            <i className="fa-solid fa-circle-plus" aria-hidden="true"></i>
            <h3>And more coming soon!</h3>
          </div>
        </article>
      </div>
    </Section>
  );
}

export default Projects;

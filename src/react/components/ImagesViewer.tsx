import ReactFocusLock from "react-focus-lock";
import { useImagesViewer } from "../contexts/ImageViewerProvider.tsx";
import { useEscape } from "../utils/helpers.tsx";
import { useEffect } from "react";
import styles from "../../styles/components/ImageViewer.module.css";

function ImagesViewer() {
  const { images, imageIndex, slideImage, openImage, closeImagesViewer } =
    useImagesViewer();

  useEscape(closeImagesViewer);

  useEffect(() => {
    const handleArrows = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === "ArrowLeft") slideImage(-1);
      if (key === "ArrowRight") slideImage(1);
    };

    window.addEventListener("keydown", handleArrows);

    return () => window.removeEventListener("keydown", handleArrows);
  });
  if (images.length === 0) return null;

  return (
    <ReactFocusLock returnFocus={true}>
      <div id="images-viewer" className={styles["images-viewer"]}>
        <div
          className={styles["viewer__overlay"]}
          onClick={closeImagesViewer}
        ></div>
        <div className={styles["viewer"]}>
          <button
            type="button"
            aria-label="Close"
            className={`${styles["viewer__button"]} ${styles["viewer__close-button"]}`}
            onClick={closeImagesViewer}
          >
            <i className="fa-solid fa-x" aria-hidden="true"></i>
          </button>
          <div className={styles["viewer__images-wrapper"]}>
            <div className={styles["images-view"]}>
              {images.map((url, index) => (
                <img
                  key={url}
                  className={styles["images-viewer__image"]}
                  src={url}
                  style={{ display: index === imageIndex ? "block" : "none" }}
                  alt=""
                />
              ))}
            </div>
            <button
              aria-label="Previous image"
              type="button"
              className={`${styles["viewer__button"]} ${styles["slide-button"]} ${styles["viewer__previous"]}`}
              onClick={() => slideImage(-1)}
            >
              <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>

            <button
              aria-label="Next image"
              type="button"
              className={`${styles["viewer__button"]} ${styles["slide-button"]} ${styles["viewer__next"]}`}
              onClick={() => slideImage(1)}
            >
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
          <ul id="bubbles" className={styles["viewer__bubbles"]}>
            {images.map((url, index) => (
              <li key={url}>
                <button
                  className={`${styles["viewer__bubble"]} ${imageIndex === index ? styles["selected"] : ""}`}
                  aria-label={`Open image number ${index}`}
                  aria-pressed={imageIndex === index}
                  value={index}
                  onClick={() => openImage(index)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ReactFocusLock>
  );
}

export default ImagesViewer;

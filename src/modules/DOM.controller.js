import { projectsMap } from "./projects.data.js";

export const DOMcontroller = {
  initDom() {
    this._initAvatars();
    this._initButtons();
  },

  renderProjects(projectsMap) {
    const container = document.querySelector("#projects-container");
    projectsMap.forEach((project, id) => {
      container.appendChild(this._createProjectCard(project, id));
    });
    container.appendChild(this._createPlaceHolder());
  },

  _createPlaceHolder() {
    const placeholder = document.createElement("article");
    placeholder.className = "project-card project-placeholder";
    const content = placeholder.appendChild(document.createElement("div"));
    content.className = "project-placeholder__content";
    content.innerHTML = `
      <i class="fa-solid fa-circle-plus" aria-hidden="true"></i>
      <h3>
        And more coming soon!
      </h3
    `;

    return placeholder;
  },

  _createProjectCard(project, id) {
    const {
      title,
      description,
      images_preview,
      images_high_resolution,
      github,
      preview,
    } = project;
    const card = document.createElement("article");
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(0.95)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "none";
    });

    const imagesContainer = card.appendChild(document.createElement("div"));
    imagesContainer.role = "button";
    imagesContainer.tabIndex = "0";
    imagesContainer.ariaLabel = "Open images";
    imagesContainer.title = "Project's pictures";

    card.id = id;
    const body = card.appendChild(document.createElement("div"));
    const meta = body.appendChild(document.createElement("div"));
    const header = meta.appendChild(document.createElement("header"));
    const descContainer = meta.appendChild(document.createElement("div"));
    const actions = body.appendChild(document.createElement("div"));

    card.className = "project-card";
    imagesContainer.className = "project-card__images-grid";

    imagesContainer.addEventListener("click", (e) => {
      const { value } = e.target;
      imagesViewer.openImagesView(images_high_resolution, Number(value) || 0);
    });

    imagesContainer.addEventListener("keydown", (e) => {
      const { key } = e;
      if (key === "Enter" || key === " ")
        imagesViewer.openImagesView(images_high_resolution);
    });

    body.className = "project-card__body";
    meta.className = "project-card__meta";
    header.className = "project-card__header";
    descContainer.className = "project-card__desc";
    actions.className = "project-card__actions";

    images_preview.forEach((image, index) => {
      const container = imagesContainer.appendChild(
        document.createElement("div"),
      );
      container.className = "project-card__image-wrapper";
      const img = document.createElement("img");
      img.className = "project-card__image";
      img.src = image;
      img.value = index;
      container.appendChild(img);
      imagesContainer.appendChild(container);
    });

    const h3 = header.appendChild(document.createElement("h3"));
    h3.className = "project-card__title";
    h3.textContent = title;

    const p = descContainer.appendChild(document.createElement("p"));
    p.className = "project-card__descriptor";
    p.textContent = description;

    actions.innerHTML = `
    <ul class="project-card__actions-list">
      <li>
        <a href=${github} 
          class="btn btn--primary" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github" aria-hidden="true"></i>
          Github
        </a>
      </li>
      <li>
        <a href=${preview} 
          class="btn btn--secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-eye" aria-hidden="true"></i>
          Preview
        </a>
      </li>
    </ul>`;

    return card;
  },

  _initButtons() {
    const buttons = document.querySelectorAll(".btn--secondary");
    const onMouseEnter = (e) => {
      const { target: button } = e;
      const filler = button.querySelector(".btn__filler");
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      filler.style.left = `${x}px`;
      filler.style.top = `${y}px`;
    };
    buttons.forEach((button) => {
      const fillerContainer = button.appendChild(document.createElement("div"));
      const filler = fillerContainer.appendChild(document.createElement("div"));
      fillerContainer.className = "btn__filler-wrapper";
      filler.className = "btn__filler";
      button.addEventListener("mouseenter", onMouseEnter);
    });
  },

  async _initAvatars() {
    try {
      const response = await fetch(`https://api.github.com/users/zentyvi`);

      if (!response.ok) {
        throw new Error(`Request error: ${response.status}`);
      }

      const data = await response.json();

      const avatars = document.querySelectorAll(".github-avatar");
      const { avatar_url } = data;
      avatars.forEach((avatar) => {
        avatar.src = avatar_url;
        avatar.alt = "Github avatar";
      });
    } catch (error) {
      console.error("Failed to load avatar:", error);
    }
  },
};

// Images viewer

const imagesViewer = {
  _boundHandler: null,
  _currentIndex: 0,
  _images: [],

  openImagesView(images, index = 0) {
    this._currentIndex = typeof index === "number" ? index : 0;
    this._images = images;
    const viewer = document.querySelector("#images-viewer");
    viewer.classList.add("open");

    this._mountImages();
    this._mountBubbles();
    this._moveFocus();

    this._boundHandler = this._handleKeys.bind(this);
    window.addEventListener("keydown", this._boundHandler);
  },

  slideImage(increment) {
    const imagesNumber = this._images.length;
    if (this._currentIndex === imagesNumber - 1 && increment > 0) {
      this._currentIndex = 0;
    } else if (this._currentIndex === 0 && increment < 0) {
      this._currentIndex = imagesNumber - 1;
    } else {
      this._currentIndex += increment;
    }

    this._reRenderImages();
    this._reRenderBubbles();
  },

  initViewer() {
    this._initButtons();
  },

  _initButtons() {
    const prevButton = document.querySelector(".viewer__previous");
    const nextButton = document.querySelector(".viewer__next");
    const closeButton = document.querySelector(".viewer__close-button");
    const overlay = document.querySelector(".viewer__overlay");

    prevButton.addEventListener("click", () => this.slideImage(-1));
    nextButton.addEventListener("click", () => this.slideImage(1));
    closeButton.addEventListener("click", this._closeImagesView.bind(this));
    overlay.addEventListener("click", this._closeImagesView);
  },

  _handleKeys(e) {
    const { key } = e;
    switch (key) {
      case "Escape":
        this._closeImagesView();
        break;
      case "ArrowRight":
        this.slideImage(1);
        break;
      case "ArrowLeft":
        this.slideImage(-1);
        break;
    }
    this._trapFocus(e);
  },

  _mountImages() {
    const imagesContainer = document.querySelector("#images-view");
    imagesContainer.innerHTML = "";
    this._images.forEach((url, index) => {
      const image = imagesContainer.appendChild(document.createElement("img"));
      const isCurrentImage = this._currentIndex === index;
      image.src = url;
      image.style.display = isCurrentImage ? "block" : "none";
      image.className = "images-viewer__image";
    });
  },

  _reRenderImages() {
    const images = document.querySelectorAll(".images-viewer__image");
    images.forEach((image, index) => {
      const isCurrentImage = this._currentIndex === index;
      image.style.display = isCurrentImage ? "block" : "none";
    });
  },

  _mountBubbles() {
    const bubblesList = document.querySelector("#bubbles");
    bubblesList.innerHTML = "";
    const imagesNumber = this._images.length;

    const handleClick = (e) => {
      this._currentIndex = Number(e.target.value);

      this._reRenderBubbles();
      this._reRenderImages();
    };

    for (let i = 0; i < imagesNumber; i++) {
      const item = bubblesList.appendChild(document.createElement("li"));
      const bubble = item.appendChild(document.createElement("button"));
      const isSelected = this._currentIndex === i;
      bubble.classList = "viewer__bubble";
      if (isSelected) {
        bubble.classList.add("selected");
      }
      bubble.ariaLabel = `Open image number ${i + 1}`;
      bubble.value = i;
      bubble.addEventListener("click", handleClick);
    }
  },

  _reRenderBubbles() {
    const bubbles = document.querySelectorAll(".viewer__bubble");
    bubbles.forEach((bubble, index) => {
      const isSelected = this._currentIndex === index;
      if (isSelected) {
        bubble.classList.add("selected");
      } else {
        bubble.classList.remove("selected");
      }
    });
  },

  _trapFocus(e) {
    if (e.key !== "Tab") return;
    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const viewer = document.querySelector("#images-viewer");
    const focusableElements = viewer.querySelectorAll(focusableSelectors);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  },

  _moveFocus() {
    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const viewer = document.querySelector("#images-viewer");
    const element = viewer.querySelector(focusableSelectors);
    element.focus();
  },

  _closeImagesView() {
    this._currentIndex = 0;
    const viewer = document.querySelector("#images-viewer");
    viewer.classList.remove("open");
    window.removeEventListener("keydown", this._boundHandler);
  },
};

function initSectionAnimations() {
  const sections = document.querySelectorAll(".section");

  const observerOptions = {
    root: null,
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
        entry.target.classList.add("visible");

        observerInstance.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

export function init() {
  document.addEventListener("DOMContentLoaded", initSectionAnimations);
  DOMcontroller.initDom();
  imagesViewer.initViewer();
  DOMcontroller.renderProjects(projectsMap);
}

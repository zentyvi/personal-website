export const projectsMap = new Map();
const _pathPreview = "./images/projects/preview";
const _pathHighResolution = "./images/projects/high-resolution";
const _github = "https://github.com/zentyvi";

const _projects = [
  {
    title: "Odin book",
    description:
      "Full-stack social network application created as the final capstone project for The Odin Project curriculum.",
    images_preview: [],
    images_high_resolution: [],
    github: `${_github}/odin-book`,
    preview: "https://odin-book-zenty.netlify.app/",
    prefix: "odin-book",
    imagesNumber: 3,
  },

  {
    title: "Messaging app",
    description:
      "Full-stack non-real-time messaging application built from scratch as part of The Odin Project curriculum.",
    images_preview: [],
    images_high_resolution: [],
    github: `${_github}/messaging-app`,
    preview: "https://zenty-chat.netlify.app",
    prefix: "messaging-app",
    imagesNumber: 2,
  },

  {
    title: "Blog API",
    description:
      "RESTful Blog application. This repository contains the backend service and two separate frontend clients that interact with the API.",
    images_preview: [],
    images_high_resolution: [],
    github: `${_github}/blog-api`,
    preview: "https://odin-blog-user.netlify.app/",
    prefix: "blog-api",
    imagesNumber: 3,
  },

  {
    title: "File uploader",
    description:
      "Failik is a full-stack cloud file management application. It allows users to create accounts, organize their files into folders, upload assets, and securely share folder contents with unauthenticated users using temporary access links.",
    images_preview: [],
    images_high_resolution: [],
    github: `${_github}/file-uploader`,
    preview: "https://failik.onrender.com",
    prefix: "file-uploader",
    imagesNumber: 3,
  },
];

_projects.forEach((project) => {
  projectsMap.set(crypto.randomUUID(), project);
});

for (let i of _projects) {
  const { prefix, imagesNumber, id } = i;
  for (let j = 1; j < imagesNumber + 1; j++) {
    const image = new Image();
    const preview = `${_pathPreview}/${prefix}/image${j}.webp`;

    image.src = preview;

    i.images_preview.push(preview);
  }
}

for (let i of _projects) {
  const { prefix, imagesNumber, id } = i;
  for (let j = 1; j < imagesNumber + 1; j++) {
    const image = new Image();
    const highResolution = `${_pathHighResolution}/${prefix}/image${j}.png`;

    image.src = highResolution;

    i.images_high_resolution.push(highResolution);
  }
}

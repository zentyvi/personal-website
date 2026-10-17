const _github = "https://github.com/zentyvi";

interface Project {
  title: string;
  description: string;
  images_preview: Array<string>;
  images_high_resolution: Array<string>;
  github: `https://github.com/zentyvi/${string}`;
  preview: `https://${string}`;
  prefix: string;
  imagesNumber: number;
}

export const projects: Array<Project> = [
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

for (const i of projects) {
  const { prefix, imagesNumber } = i;
  for (let j = 1; j < imagesNumber + 1; j++) {
    const image = new Image();
    const preview = `images/projects/preview/${prefix}/image${j}.webp`;

    image.src = preview;

    i.images_preview.push(preview);
  }
}

for (const i of projects) {
  const { prefix, imagesNumber } = i;
  for (let j = 1; j < imagesNumber + 1; j++) {
    const image = new Image();
    const highResolution = `images/projects/high-resolution/${prefix}/image${j}.png`;

    image.src = highResolution;

    i.images_high_resolution.push(highResolution);
  }
}

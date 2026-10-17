import { createContext, useContext, useState } from "react";

interface ImagesViewerContext {
  isOpen: boolean;
  images: string[];
  imageIndex: number;
  openImagesViewer: (images: string[], index: number) => void;
  closeImagesViewer: () => void;
  slideImage: (increment: number) => void;
  openImage: (index: number) => void;
}

interface Props {
  children: React.ReactNode;
}

const ImagesViewerContext = createContext<ImagesViewerContext | null>(null);

export function ImagesViewerProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [imageIndex, setImageIndex] = useState(0);

  const openImagesViewer = (images: string[], index: number = 0) => {
    setIsOpen(true);
    setImages(images);
    setImageIndex(index);
  };

  const closeImagesViewer = () => {
    setIsOpen(false);
  };

  const slideImage = (increment: number) => {
    const imagesNumber = images.length;
    if (imageIndex === imagesNumber - 1 && increment > 0) {
      setImageIndex(0);
    } else if (imageIndex === 0 && increment < 0) {
      setImageIndex(imagesNumber - 1);
    } else {
      setImageIndex((prev) => prev + increment);
    }
  };

  const openImage = (index: number) => {
    setImageIndex(index);
  };

  return (
    <ImagesViewerContext.Provider
      value={{
        isOpen,
        images,
        imageIndex,
        openImagesViewer,
        closeImagesViewer,
        slideImage,
        openImage,
      }}
    >
      {children}
    </ImagesViewerContext.Provider>
  );
}

// eslint-disable-next-line
export const useImagesViewer = () => {
  const context = useContext(ImagesViewerContext);
  if (!context) {
    throw new Error(
      "ImagesViewerContext mus be used within the ImagesViewerProvider",
    );
  }

  return context;
};

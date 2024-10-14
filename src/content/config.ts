import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const collections = {
  halloweenPics: defineCollection({
    loader: cldAssetsLoader({
      folder: "halloween",
    }),
  }),
};

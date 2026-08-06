import type { MetadataRoute } from "next";

/** Временно закрыто от индексации. Когда откроете сайт — разрешите / и уберите noindex из layout. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://nexoragrowth.com', lastModified: new Date() },
    { url: 'https://nexoragrowth.com/contact', lastModified: new Date() }
  ];
}
import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, canonical }) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;

      let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.content = canonical;

      let twitterUrl = document.querySelector('meta[name="twitter:url"]') as HTMLMetaElement | null;
      if (!twitterUrl) {
        twitterUrl = document.createElement('meta');
        twitterUrl.setAttribute('name', 'twitter:url');
        document.head.appendChild(twitterUrl);
      }
      twitterUrl.content = canonical;
    }
  }, [title, description, canonical]);

  return null;
};

export default Seo;

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export const SEO = ({ title, description, url, image }: SEOProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} key='og:title' />
        <meta
          property='og:description'
          content={description}
          key='og:description'
        />
        <meta property='og:image' content={image} key='og:image' />
        <meta property='og:url' content={url} key='og:url' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Helmet>
      <div id='seo-ready' />
    </>
  );
};

import { useState } from 'react';

import { IBlogPost } from '../context/BlogPostContext';

export const useInitRequest = () => {
  const [blogPost, setBlogPost] = useState<IBlogPost>({
    title: '',
    content: '',
    thumbnailUrl: '',
    category: 'ETC',
    status: 'TEMPORAL',
  });

  return { blogPost, setBlogPost };
};

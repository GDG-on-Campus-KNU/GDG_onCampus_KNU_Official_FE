import { createContext } from 'react';

import { useInitRequest } from '../hooks/useInitRequest';

export interface IBlogPost {
  title: string;
  content: string;
  thumbnailUrl: string;
  category: 'BACKEND' | 'FRONTEND' | 'ANDROID' | 'AI' | 'DESIGN' | 'ETC';
  status: 'TEMPORAL' | 'SAVED';
}

export const BlogPostContext = createContext<
  ReturnType<typeof useInitRequest> | undefined
>(undefined);

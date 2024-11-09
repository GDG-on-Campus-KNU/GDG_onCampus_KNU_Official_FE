import { createContext, useContext, useState } from 'react';

export interface IBlogPost {
  title: string;
  content: string;
  thumbnailUrl: string | null;
  category: 'BACKEND' | 'FRONTEND' | 'ANDROID' | 'AI' | 'DESIGN' | 'ETC';
  status: 'TEMPORAL' | 'SAVED';
}

interface BlogPostContextType {
  blogPost: IBlogPost;
  setBlogPost: React.Dispatch<React.SetStateAction<IBlogPost>>;
}

const blogPostContext = createContext<BlogPostContextType | undefined>(
  undefined
);

export const BlogPostProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogPost, setBlogPost] = useState<IBlogPost>({
    title: '',
    content: '',
    thumbnailUrl: null,
    category: 'ETC',
    status: 'TEMPORAL',
  });

  return (
    <blogPostContext.Provider value={{ blogPost, setBlogPost }}>
      {children}
    </blogPostContext.Provider>
  );
};

export const useBlogPost = () => {
  const context = useContext(blogPostContext);
  if (!context) {
    throw new Error('useBlogPost must be used within a BlogPostProvider');
  }
  return context;
};

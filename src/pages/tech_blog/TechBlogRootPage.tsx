import Star from '@gdg/components/feature/star/Star';
import { Outlet } from 'react-router-dom';

import { MainContent } from '../RootPage';

const TechBlogRootPage = () => {
  return (
    <>
      <MainContent>
        {[...Array(10)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * 20}%`}
            left={`${Math.random() * 100}%`}
          />
        ))}

        <Outlet />
      </MainContent>
    </>
  );
};

export default TechBlogRootPage;

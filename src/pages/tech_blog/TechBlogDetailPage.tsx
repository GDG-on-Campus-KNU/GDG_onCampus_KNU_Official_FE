import { useParams } from 'react-router-dom';

const TechBlogDetailPage = () => {
  const params = useParams();
  const userId = params.id;

  return <>{userId}</>;
};

export default TechBlogDetailPage;

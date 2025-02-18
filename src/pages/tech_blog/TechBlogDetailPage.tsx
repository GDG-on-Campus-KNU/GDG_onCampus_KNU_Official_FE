import { useParams } from 'react-router-dom';

import { Spinner } from '@gdg/components/common/Spinner';
import { useGetPostDetail } from '@gdg/apis/hooks/techblog/useGetPostDetail';

import BlogContent from './Components/blogContent';
import Comments from './Components/Comments';

const TechBlogDetailPage = () => {
  const params = useParams();
  const userId = params.id;
  const postId = userId ? parseInt(userId) : null;

  const postData = useGetPostDetail(postId);

  return (
    <>
      {postData.isPending && <Spinner />}
      {postData.data && (
        <>
          <BlogContent postData={postData.data} />
          <Comments
            likeCount={postData.data.likeCount}
            commentCount={postData.data.commentCount}
          />
        </>
      )}
    </>
  );
};

export default TechBlogDetailPage;

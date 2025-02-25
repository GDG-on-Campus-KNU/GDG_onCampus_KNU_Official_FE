import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Spinner } from '@gdg/components/common/Spinner';
import { useGetPostDetail } from '@gdg/apis/hooks/techblog/useGetPostDetail';

import BlogContent from './components/blogDetail/BlogContent';
import CommentList from './components/blogDetail/CommentList';

const TechBlogDetailPage = () => {
  const params = useParams();
  const userId = params.id;
  const postId = userId ? parseInt(userId) : null;

  const postData = useGetPostDetail(postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {postData.isPending && <Spinner />}
      {postData.data && (
        <>
          <BlogContent postData={postData.data} />
          <CommentList
            likeCount={postData.data.likeCount}
            commentCount={postData.data.commentCount}
          />
        </>
      )}
    </>
  );
};

export default TechBlogDetailPage;
